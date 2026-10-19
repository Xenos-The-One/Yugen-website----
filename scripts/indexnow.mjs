// Tells Bing (and through it ChatGPT search, Copilot, Yandex, etc.) about every URL in the live sitemap.
// Run after a production deploy is live: npm run indexnow
const SITE = 'https://www.raindropmarketing.ca'
const KEY = 'b89e44ac5a2bd4d5be832f9198681e3d' // matches public/b89e44ac5a2bd4d5be832f9198681e3d.txt

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
})
console.log(`IndexNow: submitted ${urlList.length} URLs, HTTP ${res.status}`)
