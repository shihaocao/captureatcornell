import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import {img_photo_descrip_block} from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const neg_margin = -10

export default function Longboard() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>DIY Electric Longboard</title>
      </Head>
      <h1>DIY Electric Longboard</h1>
      
      <Link href="/builds/builds-landing">
        <a>Back to builds</a>
      </Link>
      <br></br>

      <div className='photo-div'>
        <img
        src = '/images/longboard/bottomboard.jpg'
        alt = ''
        layout='fill'
        loading="lazy"
        />
      </div>

      {img_photo_descrip_block("Thank You",
        "I've been working on this for 4 years now, making repairs and modifications constantly." + 
        "Shoutout to my friends at Longfellow Middle School for helping me out a ton with the initial build and stunning paint job." + 
        "This project would not have been possible without a group of friends who were just excited about doing awesome things.",
        '/images/longboard/topboard.jpg',
        '')}

      <h2>How to build it</h2>
      <p>I followed this excellent guide from <a href = "http://www.instructables.com/id/Electric-Longboard/" >instructables</a> written by cosma42.</p>

      <h2>Why I built it</h2>
      <p>At the Science Olympiad 2015 Nationals Tournament, I saw a guy riding around campus with one, but it seemed like it was DIY not bought.
        When he showed us his board, he convinced me that it was
      incredibly easy to build on your own, so I took it upon myself to follow some random guides to piece together my own. </p>

      <p></p>

      <h2>Pictures</h2>

      {img_photo_descrip_block("Paint Scheme",
        "After cutting out the board, we painted the board using several sprays of blue spray paint. " +
        "The dragon design was cut manually with an Exacto knife onto cardboard following the outline of a printed dragon.",
        '/images/longboard/bottomboard.jpg',
        '')}
      {img_photo_descrip_block("Electronics",
        "The two 3S 5000mah LiPOs are run in series and stuffed inside the old hard drive cage. " +
        "It's held in from the front using velcro  and tucked in at the back using the duct-tape wrapped " +
        "foam block. " +
        "The ESC is bound to the plywood plank using picture hangar wire. The RX and switch box are hot glued down next to it. " + 
        "Both the hard drive cage and the plank are then screwed into the board.",
        '/images/longboard/electronics.jpg',
        'Electronics')}

      {img_photo_descrip_block("Motor Mount and Weld",
        "I have only ever done maybe ~10 welds with steel and ~5 welds with aluminum so by no means am I an expert in welding. " +
        "As a result, the weld looks pretty goopy on the outside, but I assure you it's plenty strong. In the past, " +
        "the connection between the motor mount and the longboard truck failed regularly, resulting in the motor falling to the asphalt, " +
        "and thus marring up the surface. That's the reason why I finally learned how to weld aluminum to put the final touches on this build.",
        '/images/longboard/weld.jpg',
        'Weld')}

      <div>
      <h3 style={{marginBottom: neg_margin}}>More Longboards</h3>
      <p>I helped a friend build their own newer electric longboard too. Check out his projects <Link href="https://antiprojects.com/index.html"><a target="_blank">here</a></Link>.
      </p>
      <div className='photo-div'>
      {/* <Image src="/photography/jumping.jpg" alt="me" width="4000" height="600" /> */}
      <img
        src = {'/images/longboard/antiochs-board.jpg'}
        alt = ''
        layout='fill'
        loading="lazy"
      />
      </div>
      </div>

      {/* {img_photo_descrip_block("More Longboards",
        "I helped a friend build their own newer electric longboard too." ,
        '/images/longboard/antiochs-board.jpg',
        'Power Systems')} */}

      {/* <style jsx>{`
        .photo-div {
          margin-top: 1.0rem;
          margin-bottom: 1.0rem
        }
      `}</style> */}

    </Layout>

  )
}
