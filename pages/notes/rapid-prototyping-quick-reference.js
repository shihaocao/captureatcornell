import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "Rapid Prototyping Quick Reference"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      
      <Link href="/notes/notes-landing">
        <a>Back to notes</a>
      </Link>
      <br></br>
      
      <h2>Principles for rapid prototyping and mechanical design</h2>

      <div>
        <h3>Avoid complex manufacturing processes</h3>

        <p>Complex manufacturing processes are not only slow themselves, but they often add extra design constraints.
           Only use something as complex as you need to.
           These days, 3D printing is incredibly overrated. Woodworking has become a bit of lost art, and it is often forgotten how incredible
           of a material wood is.
        </p>

        <p>If you want to 3D print a plate with thru-holes, consider laser cutting wood (or even mark and drill).</p>
        <p>If you want to 3D print a long rod, consider a metal stock rod instead.</p>
        <p>If you want to 3D print a giant block, consider cutting down 2x4 wood stock.</p>

        <p><b>Consider trading repeatability for first pass manufacturing speed.
        </b></p>
        <hr></hr>
      </div>

      <div>
        <h3>Localized complexity should have targetted manufacturing</h3>

        <p>
        If for example, you have a set of stepper motors mounted a foot away from one another...
        Do not make a bracket that is 1 foot long, with mounting holes 1 foot apart. Instead make two sets of smaller brackets, that are mounted to a stock backbone.
        </p>
        
        <p>This allows bracket design, and backbone design to iterate separately from one another.</p>

        <p>Of course the exception to this is in production. Once the designs have settled down, the backbone and brackets can be merged to delete and lower part count.</p>

        <p><b>
        Seperate parts are opportunities for separate iteration.
        </b></p>

        Be careful though! Having too many parts can add too many interfaces, and interfaces add overhead.
        <hr></hr>
      </div>

      <div>
        <h3>Introduce Speed Holes</h3>

        <p>
        <b>When under time crunch, see if there's a way to modify existing parts to serve the new job.
        </b>
        </p>

        <p>
        You might be able to re-use the same piece if you're willing to sacrifice some cosmetics.
        There is no shame in introducing "speed-holes".
        </p>

        <hr></hr>
      </div>

    </Layout>

  )
}
