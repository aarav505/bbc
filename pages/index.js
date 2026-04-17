import Link from 'next/link'
import Layout from '../components/Layout'
import { articles } from '../lib/articles'

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <h1>Latest</h1>
      </section>

      <section className="articles">
        {articles.map((a) => (
          <article key={a.slug} className="card">

            <Link href={`/articles/${a.slug}`} className="thumb-link">
              <img src={a.source} alt={a.title} className="thumb" />
            </Link>

            <div className="card-body">
              <div className="category-badge">{a.category}</div>

              <h2 className="card-title">
                <Link href={`/articles/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {a.title}
                </Link>
              </h2>

              <p className="excerpt">{a.excerpt}</p>
            </div>

          </article>
        ))}
      </section>
    </Layout>
  )
}