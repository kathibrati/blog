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
        <p>[Henlo dis me]</p>
        <p>
          (This is a sample kanthi pewpew{' '}
          <a href="https://esportal.com/profile/klops">i like eRadel</a>.)
        </p>
      </section>
    </Layout>
  )
}
