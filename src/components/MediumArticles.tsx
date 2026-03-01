'use client'

import { useEffect, useState } from 'react'

interface Article {
  title: string
  link: string
  pubDate: string
  thumbnail: string
  description: string
  categories: string[]
}

export default function MediumArticles() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const feed = encodeURIComponent('https://thefiend.medium.com/feed')
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed}&count=6`)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === 'ok') {
          setArticles(data.items)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-5 animate-pulse">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded mb-3 w-3/4" />
            <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2 w-full" />
            <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3" />
          </div>
        ))}
      </div>
    )
  }

  if (error || articles.length === 0) {
    return (
      <p className="text-neutral-500 dark:text-neutral-500 text-sm">
        Could not load articles. Visit{' '}
        <a href="https://thefiend.medium.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
          thefiend.medium.com
        </a>{' '}
        to read my writing.
      </p>
    )
  }

  const stripHtml = (html: string) =>
    html.replace(/<[^>]*>/g, '').slice(0, 120).trim() + '…'

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-SG', { year: 'numeric', month: 'short', day: 'numeric' })

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <a
          key={article.link}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-800 p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
        >
          {article.thumbnail && (
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-36 object-cover rounded-md mb-4"
            />
          )}
          <div className="flex flex-wrap gap-1 mb-3">
            {article.categories.slice(0, 2).map((cat) => (
              <span key={cat} className="px-2 py-0.5 text-xs bg-neutral-100 dark:bg-neutral-900 rounded-full">
                {cat}
              </span>
            ))}
          </div>
          <h4 className="font-semibold text-sm leading-snug mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors line-clamp-2">
            {article.title}
          </h4>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed mb-4 flex-1 line-clamp-3">
            {stripHtml(article.description)}
          </p>
          <span className="text-xs text-neutral-400 dark:text-neutral-600 mt-auto">
            {formatDate(article.pubDate)}
          </span>
        </a>
      ))}
    </div>
  )
}
