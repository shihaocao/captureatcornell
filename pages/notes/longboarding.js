import Head from 'next/head'
import Link from 'next/link'
import { centered_img_block, dual_centered_img_block } from '../../components/centered_img_blocks';
import Layout from '../../components/layout'
// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';

const title = "Longboarding"
const top_page_title = title

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
            
      <p>I longboard everywhere at Cornell,
        and downhill full-speed whenever the road is clear.
        If I'm in NYC or Chicago, I'll also longboard around.</p>

      <p>I started longboarding back in middle school when I built my first electric longboard.
        But since then, I have always preferred non-electric boards. They are 5x lighter and
        easier to carry around.
      </p>

      <h4>The electric board</h4>

      <p>This was my first ever board, and it was a whole saga to <Link href = '/builds/longboard'>build</Link> in Middle School.</p>

      {dual_centered_img_block('longboard/topboard.jpg', 'longboard/bottomboard.jpg')}

      <p>I rode it whenever I needed to go from North campus down to Central campus, and it certainly got the job done.
        It was fast, and I was never late to class.
      </p>
      <h4>The way too small nickel board</h4>
      
      <p>I got this board in the Summer at SpaceX in 2020 out of necessity. I didn't bring my electric board to LA,
        and since I didn't have a car in LA, I wanted a board so I could ride between my office in HT-21 and HT-01.
      </p>

      {centered_img_block('longboarding/old-red.jpg')}

      <p>I later converted it into a snowboard and never bothered to put it back together lmao.
      </p>

      {centered_img_block('longboarding/snowboard.jpg')}

      <h4>The GP</h4>

      <p>The general-purpose board. I got this board in the Fall of 2021,
      as I needed a board with real grip-tape and stiffness. This board, especially with the upgraded
      70mm wheels gave me real stiffness and confidence in going down the hill
      into Collegetown at full speed without carving.</p>

      {centered_img_block('longboarding/gp.jpg')}

      <p>Its true beauty is its portability though. I don't go to class without it.</p>
      
      <h4>The spark gloves</h4>

      {centered_img_block('longboarding/spark-gloves.jpg')}

      <p>Right after I got the GP board I knew I needed some gloves because I was going to wipe out.
        I did a set of DIY slide gloves because premade was expensive lol.
        I got a set of work gloves, a sewing kit, velcro pads, and <a href="https://www.amazon.com/Glield-Slide-Flintstones-Flames-CBHK01/dp/B01G6S8OFM/ref=sr_1_4?crid=24PWNHE6YVSMY&keywords=flint+puck+longboard&qid=1654201860">flint pucks</a>, and sewed it all together.
      </p>

      <p>Yes the flint pucks are just for the cool-factor its very fun haha.
        Try out a pair if you haven't! It pushes you to learn much faster.</p>

      <h4>The first nicer board</h4>

      <p>This board is a drop-deck 42" board made from 8-ply maple. It uses RKP trucks.
        I upgraded the wheels to Orangatang Stimulus 70mm 80a wheels on Bones Red Bearings.
        This is my nicest ride for sure. If only I could bring it everywhere haha.</p>

      <p>I kitted this ride out for downhill freeriding and sliding.</p>

      {dual_centered_img_block('longboarding/niceboard-full.jpg', 'longboarding/nice-board-at-speed.jpg')}

      {/* {centered_img_block('longboarding/nice-board-at-speed.jpg')} */}

      {centered_img_block('longboarding/nice-slide.jpg')}


      <h4>The next board</h4>

      <p>Whatever board I get, I'll probably keep the same Stimulus wheels cuz they're so expensive lol.
        I'm probably thinking about a proper full-speed downhill 9-ply board.
      </p>

    </Layout>

  )
}
