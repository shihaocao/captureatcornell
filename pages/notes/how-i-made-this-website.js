import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';

const title = "Website"
const top_page_title = "How I Made This Website"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{top_page_title}</h1>
      
      <Link href="/notes/notes-landing">
        <a>Back to notes</a>
      </Link>
      <br></br>
      
      <h2>TLDR: NextJS, AWS DNS, and Vercel</h2>
      
      I made this iteration of my website in mid-Spring 2022.

      <p>I chose NextJS because I wanted something responsive and minimalistic. I have AWS DNS because it was a hold-over from my last website.
        I used to use AWS S3 bucket static hosting, but now I use Vercel, which also takes care of my continuous deployment.
        Vercel saves me so much time, and it's free.
      </p>

      <h4>Tutorials I used:</h4>
      <ul>
        <li><a href="https://nextjs.org/learn/basics/create-nextjs-app" target="_blank" rel="noopener noreferrer">NextJS Quick Start</a></li>
        <li><a href="https://vercel.com/docs/get-started" target="_blank" rel="noopener noreferrer">Vercel Quick Start</a></li>
        <li><a href="https://aws.amazon.com/route53/" target="_blank" rel="noopener noreferrer">AWS Route 53 Quick Start</a></li>
      </ul>

      <p>You can find the source code for my current website on this&nbsp;
        <Link href="https://github.com/shihaocao/nextjs-shihao-website">github repo.</Link></p>

      <p>Feel free to use parts of it lol. Just "change it up a bit", so it doesn't look like you copied my homework.</p>

      <h3>2016 Website</h3>

      <p>Before this iteration of the website I used to use an HTML5-up template, and AWS for my DNS and hosting.
      </p>

      <div class="container">
        <div class="row">
          <div class="col my-auto">
          <img
            src = '/images/old-website/old-home.jpg'
            alt = ''
            loading="lazy"
            />
          </div>
          <div class="col my-auto">
          <img
            src = '/images/old-website/old-photo.jpg'
            alt = ''
            loading="lazy"
            />
          </div>
        </div>
      </div>

      <p>The HTML5-up template was nice, but it was too inflexible.
        Conforming content to a "theme" got in the way of the information.</p>

      <p>AWS S3 bucket was sufficient for hosting,
        but updating was always a very manual process of literally drag and drop uploading.
        Being able to push with ease on Vercel is a life-saver. Anything that decreases cycle-times is invaluable to engineers.</p>

      <h3>2022 Mardown Blog Upgrade</h3>

      <p>As I headed into the Summer of 2022, I found myself writing much more frequently, atleast once a week.
        Typically my workflow for writing was to first draft the actual content in Google Docs.
        </p>

        <p>
        But there were still additional hoops to put the writing on my website:
        </p>
        <ol>
          <li>Use online converters to turn it into html tags</li>
          <li>Paste into VSCode and edit the crap out of it </li>
          <li>Insert images</li>
          <li>Publish and push to Github/Vercel</li>
        </ol>
        <p>
        The second step of the above four would usually take an hour, which is atrocious!
        Time spent "pushing papes"/"moving code around" should be several orders of magnitude below the time spent writing.
        </p>
        <p>
        The worst part is if I made any large changes to the Google Docs source (such as to do edits/revisions),
        I would have to go through the above plumbing steps all over again.
        This overhead actively discouraged edits and improvements, which sucked.
        </p>

        <p>
        Thus, I upgraded my website to use the code presented in the <Link href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter">NextJS MD to HTML blog example</Link>.
        </p>

        <p>Now my workflow is much better:</p>
        <ol>
          <li>Use the <Link href="https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607">GoogleDocs to Markdown extension</Link> to generate .md</li>
          <li>Paste into VSCode directly with no edits</li>
          <li>Insert images</li>
          <li>Publish and push to Github/Vercel</li>
        </ol>

        <p>
          The above steps take 5 minutes tops. This is soooo much better.
        </p>
        
        <p>It took me about 2 hours to figure out how to add the automatic MD to HTML generation to my website,
         so as soon as I write two more pieces, I'll be net positive! And as soon as I write two more after that, I'll have justified my investment!
        </p>


    </Layout>

  )
}
