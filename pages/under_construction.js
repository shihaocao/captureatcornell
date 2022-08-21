import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Lodestar</title>
      </Head>
      <h1>Lodestar: An Electric VTOL Rocket</h1>

      This page is still under construction. Check back soon!

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}