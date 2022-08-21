import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'


export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Shihao's Reads</title>
      </Head>
      <h1>Shihao's Reads</h1>
      
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <br></br>
      <h2>Thoughts</h2>
      Takeaways from life

      <p>
      Many of my life expierences collapse into a few core ideas.
      I wanted to write them down as well as some of the stories that came along with them.
      </p>

      <hr></hr>

      <p>Ideas are useless, execution is everything.</p>
      <p>All motivation issues stem from a lack of value provided from the work being done.</p>
      <p>Plans are worthless, planning is everything.</p>
      <p>You have to seek feedback.</p>
      <p>It is not virtuous to be busy, it is virtuous to get things done.</p>
      <p>If it's guarenteed, it's guarenteed to fail.</p>
      <p>Complacency is the only enemy</p>
      <p>It is 10x harder to build the machine that builds the machine.</p>
      <p>It is 100x harder to build the team that builds the machine that builds the machine.</p>

      <br></br>

    </Layout>

  )
}
