import Head from 'next/head'
import Layout from '../components/layout'
import { siteTitle } from "../components/layout.js"
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Link from 'next/link'
import { front_page_post_list } from './notes/notes-landing'

import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'

const neg_margin = -12
const icon_size = "26"

// type Props = {
//   allPosts: Post[]
// }

export default function Home() {
  return (
    <Layout home layout_type={styles.containerHome}>
      <Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>


        <h3>Who we are</h3>
        <p>
        🏫 &nbsp; A photography and videography community at Cornell
        <br></br>
        📷 &nbsp; a family of people who want to capture the moment

        </p>

        <h3>Join us</h3>
        <p>
        📝 &nbsp; apply to join our <Link href="https://forms.gle/Y4kjK78vRJ4sHPPH8">E-Board here</Link>
        <br></br>
        🛰️ &nbsp; join our <Link href="https://join.slack.com/t/captureatcornell/shared_invite/zt-2t6olsu44-hgMf8Iu6AxlTHjU6WT~LRA">slack here</Link>
        <br></br>
        🔩 &nbsp; request a collab with us through <Link href="https://forms.gle/CtzudiCehoRwp5kM8"> this google form</Link>
        </p>

        <h3>Got any other questions?</h3>
        <p>Reach out to us at&nbsp;
        <a href="captureatcornell@gmail.com">captureatcornell@gmail.com</a>
        </p>

      </section>

    </Layout>
    
    
  )
}


export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
