import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello, I'm Peter. I'm a frontend software engineer.]</p>
        <p>
          (I have experience with Javascript, React, various frameworks, and much more.)
        </p>
      </section>
    </Layout>
  )
}