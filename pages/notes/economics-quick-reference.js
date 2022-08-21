import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const title = "Economics Quick Reference"

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
      
      <h2>Things to help frame my thoughts on economics</h2>

      <div>
        <h3>Education alone does not cause economic growth</h3>

        <p>
        It is not enough to emphasize education (and blindly expect economic growth). We should also emphasize creating opportunities for ourselves, and a strive for improvement and innovation
        </p>

        <p>
        The relevant point here is how Taiwan broadly implemented mandatory college education. This created a massively overly educated workforce. There was a vast increase
        in the supply of talent, but there was not a corresponding growth in demand for that talent. In general, industry did not scale to employ those people.
        </p>

        <p>
        My take is that governments should not only retain their manufacturing capabilities but also
        develop greater (STEM-thought-based) industries which can provide much greater value add
        to the economy. Indeed many (low-infrastructure) startups coming up in the
        United States technically could be operated anywhere with a sufficiently educated talent, and create many jobs.
        </p>

        <p>
        My culminating take is that in our next generation, and in any developing nation, it is indeed important to emphasize education, as education gives a solid toolset to do things.
        But at the end of the day, it is still a toolset.
        And you still need the grit, dreams, and work ethic, and perhaps a broader entrepreneurial toolset to put the knowledge and experience from education
        to good use.
        </p>

        <p><b>One must have the knowledge and experience to seize opportunities.
          But the people who will change the world will not wait for opportunities to appear — 
          they will create their own.
        </b></p>
        <hr></hr>
      </div>

      <div>
        <h3>The best growth engine is the churn.</h3>

        <p>
        Growth incentives such as import tariffs, technology transfer agreements, VC money, cause growth in sectors as a whole.
        Many young companies start and take advantage of easy growth, and it's a sprint to take advantage of everything available.
        </p>
        
        <p>Then deliberately, or through the course of nature, hard times come about, the churn. Import tariffs are lifted, forcing companies
          to compete on the global market. VC money dries up, and companies have to rethink their strategies. Catastrophes shift the paradigm
          of what works, and what people pay for. These factors instigate a churn that let the best companies leap to the top, and clears
          the market of the players who mismanage their resources and talent.
        </p>

        <p><b>
        The companies that survive the churn are the ones that know how to sprint and leap.
        </b></p>

        <hr></hr>
      </div>

      <div>
        <h3>When people cannot achieve material happiness, they reach elsewhere.</h3>

        <p>
        Looking at China, people (at large, excluding minorities) tend to not fight the
        government very much because the government does a good job of providing economic growth
        for the country as a whole, and on an individual level in terms of salary growth
        and quality of life improvement.
        </p>

        <p>
        I think this can be contrasted with Hong Kong's situation where the government
        is unable to bring about economic development and salary growth
        for their over-educated youth.
        Of course, there is much more at play with the unrest in Hong Kong,
        many of them being ethical concerns of the government.
        </p>

        <p>
        But as a general rule of thumb, for governments, I believe that if you cannot deliver
        economic development on an individually visible level, expect people to seek happiness in non-materialistic ways.
        Often in these times, it means fighting for more socialistic ideas, social justice, and freedom of expression. All of which are great things in my opinion, but just expect a balance shift.
        </p>

        <p><b>
        People do work to be important, to build things they want to see.
        But at its core, humanity will always try to be happy.
        </b></p>

        <hr></hr>
      </div>




      <br></br>

    </Layout>

  )
}
