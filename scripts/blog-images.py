"""Generates the in-article blog images listed in scripts/blog-images.json with Gemini.

Run: python scripts/blog-images.py            (skips images that already exist)
     python scripts/blog-images.py --force    (regenerates everything)
Needs GEMINI_API_KEY in the environment or in ~/.claude/skills/.env.
Saves 1600x900 WebP files under public/.
"""
import base64
import io
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
MODEL = "gemini-2.5-flash-image"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"


def api_key():
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"]
    env = Path.home() / ".claude" / "skills" / ".env"
    if env.exists():
        for line in env.read_text().splitlines():
            if line.strip().startswith("GEMINI_API_KEY="):
                return line.split("=", 1)[1].strip().strip("\"'")
    sys.exit("GEMINI_API_KEY not found (set it in the environment or ~/.claude/skills/.env)")


def generate(key, prompt):
    body = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "16:9"}},
    }
    req = urllib.request.Request(
        URL,
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": key},
    )
    with urllib.request.urlopen(req, timeout=180) as res:
        data = json.load(res)
    for part in data["candidates"][0]["content"]["parts"]:
        if "inlineData" in part:
            return base64.b64decode(part["inlineData"]["data"])
    raise RuntimeError(f"no image in response: {json.dumps(data)[:300]}")


def save(raw, dest):
    img = Image.open(io.BytesIO(raw)).convert("RGB")
    # Center-crop to 16:9 in case the model returns a slightly different ratio.
    w, h = img.size
    target_h = round(w * 9 / 16)
    if target_h <= h:
        top = (h - target_h) // 2
        img = img.crop((0, top, w, top + target_h))
    else:
        target_w = round(h * 16 / 9)
        left = (w - target_w) // 2
        img = img.crop((left, 0, left + target_w, h))
    img = img.resize((1600, 900), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "WEBP", quality=80, method=6)
    # Busy scenes (foliage, aerials) compress poorly; trade a little quality for page weight.
    if dest.stat().st_size > 200_000:
        img.save(dest, "WEBP", quality=62, method=6)


def main():
    key = api_key()
    force = "--force" in sys.argv
    prompts = json.loads((ROOT / "scripts" / "blog-images.json").read_text())
    failed = []
    for path, prompt in prompts.items():
        dest = ROOT / "public" / path.lstrip("/")
        if dest.exists() and not force:
            continue
        for attempt in range(3):
            try:
                save(generate(key, prompt), dest)
                print(f"ok   {path} ({dest.stat().st_size // 1024} KB)")
                break
            except (urllib.error.HTTPError, urllib.error.URLError, RuntimeError, KeyError) as e:
                detail = e.read().decode()[:200] if isinstance(e, urllib.error.HTTPError) else str(e)[:200]
                print(f"retry {path}: {detail}")
                time.sleep(5 * (attempt + 1))
        else:
            failed.append(path)
    if failed:
        sys.exit(f"failed: {failed}")


if __name__ == "__main__":
    main()
