import type { Handler } from '@netlify/functions'

const FEED_URL = 'https://thefiend.medium.com/feed'

function extractCdata(str: string): string {
  const match = str.match(/<!\[CDATA\[([\s\S]*?)\]\]>/)
  return match ? match[1].trim() : str.trim()
}

function getTagContent(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`))
  return match ? extractCdata(match[1]) : ''
}

function getAllTagContents(xml: string, tag: string): string[] {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`, 'g')
  const results: string[] = []
  let match
  while ((match = regex.exec(xml)) !== null) {
    results.push(extractCdata(match[1]))
  }
  return results
}

function getThumbnail(itemXml: string): string {
  const urlMatch = itemXml.match(/<url>([^<]+)<\/url>/)
  if (urlMatch) return urlMatch[1]
  const imgMatch = itemXml.match(/<img[^>]+src="([^"]+)"/)
  if (imgMatch) return imgMatch[1]
  return ''
}

export const handler: Handler = async () => {
  try {
    const res = await fetch(FEED_URL)
    if (!res.ok) throw new Error(`Feed returned ${res.status}`)
    const xml = await res.text()

    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    const items: object[] = []
    let match

    while ((match = itemRegex.exec(xml)) !== null && items.length < 6) {
      const itemXml = match[1]
      items.push({
        title: getTagContent(itemXml, 'title'),
        link: getTagContent(itemXml, 'link'),
        pubDate: getTagContent(itemXml, 'pubDate'),
        categories: getAllTagContents(itemXml, 'category'),
        thumbnail: getThumbnail(itemXml),
        description: getTagContent(itemXml, 'description'),
      })
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'ok', items }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: String(err) }),
    }
  }
}
