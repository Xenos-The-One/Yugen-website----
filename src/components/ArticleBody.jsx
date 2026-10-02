// Blog post content is an array of strings:
//   "## Heading", "### Subheading", "- list item" (consecutive items form one list),
//   "![alt text](/blog/img/file.webp \"Optional caption\")", anything else is a paragraph.
// Paragraphs and list items support [link text](/path) and **bold**.

const IMAGE = /^!\[([^\]]*)\]\((\S+?)(?:\s+"([^"]*)")?\)$/;

function inline(text) {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      const external = /^https?:/.test(m[2]);
      parts.push(
        <a
          key={m.index}
          href={m[2]}
          className="text-primary font-medium underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {m[1]}
        </a>,
      );
    } else parts.push(<strong key={m.index} className="font-bold text-white">{m[3]}</strong>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function blocks(content) {
  const out = [];
  for (const line of content) {
    if (line.startsWith("- ")) {
      const prev = out[out.length - 1];
      if (prev?.type === "list") prev.items.push(line.slice(2));
      else out.push({ type: "list", items: [line.slice(2)] });
    } else out.push({ type: "text", line });
  }
  return out;
}

export function ArticleBody({ content }) {
  return blocks(content).map((b, i) => {
    if (b.type === "list")
      return (
        <ul key={i} className="mb-8 space-y-3 pl-1">
          {b.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-lg md:text-xl text-white/80 leading-relaxed font-light">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{inline(item)}</span>
            </li>
          ))}
        </ul>
      );
    const { line } = b;
    if (line.startsWith("## "))
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-black text-white mt-12 mb-5 tracking-tight">
          {line.slice(3)}
        </h2>
      );
    if (line.startsWith("### "))
      return (
        <h3 key={i} className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">
          {line.slice(4)}
        </h3>
      );
    const img = line.match(IMAGE);
    if (img)
      return (
        <figure key={i} className="my-10">
          <img
            src={img[2]}
            alt={img[1]}
            loading="lazy"
            className="w-full rounded-2xl border border-white/10 aspect-[16/9] object-cover bg-white/5"
          />
          {img[3] && <figcaption className="mt-3 text-center text-sm text-white/50">{img[3]}</figcaption>}
        </figure>
      );
    return (
      <p key={i} className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 font-light">
        {inline(line)}
      </p>
    );
  });
}

