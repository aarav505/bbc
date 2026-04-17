import Layout from '../../components/Layout'
import Link from 'next/link'
import { getArticleBySlug, articles } from '../../lib/articles'

export default function Article({ article }) {
  if (!article) return <Layout><p>Article not found.</p></Layout>

  return (
    <Layout>
      <article className="article-page">

        {article.source && (
          <img
            src={article.source}
            alt={article.title}
            className="article-image w-300"
            style={{ width: '800px' }}
          />
        )}

        <div className="article-body">
          <div className="category-badge">
            {article.category}
          </div>

          <h1 className="article-title">
            {article.title}
          </h1>

          <div className="article-content">
            {article.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug)
  return { props: { article } }
}