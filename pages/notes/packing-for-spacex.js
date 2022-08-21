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
        <title>SpaceX Packing</title>
      </Head>
      <h1>SpaceX Packing</h1>
      
      <Link href="/notes/notes-landing">
        <a>Back to notes</a>
      </Link>
      <br></br>

      <h2>Things to Pack for SpaceX</h2>

      <p>
      Here are the things I packed for my two summers at SpaceX, and hopefully you'll find this as useful inspiration. For reference, this is for the Hawthorne office (in LA). I am also a dude. If you are a dudette, change items accordingly.
      </p>
      <p>
      I was able to fit this all into a backpack, carry-on, and one 50lb checked bag since I flew in. If you need more space, you're packing too much.
      </p>
      
      <p>And while I'm here, if you have a car (or access to one), you will have so much more fun in LA.</p>
      <h3>Clothes for the Office</h3>
      <p>My favorite outfit to SpaceX was a T-shirt and gray jeans + a light jacket with Stan Smiths. Most people at SpaceX run this kind of outfit. I gave my final presentation in a SpaceX T-shirt and jeans lol.
      </p>
      <p>
        A light jacket is the move because sometimes it gets chilly at the office because of AC. Long jeans because
        it's casual AF, and people don't really wear shorts at the office. You could totally wear sneakers to the office too btw.
      </p>
      <p>Also if you plan on buying hella SpaceX T-shirts, you can pack fewer T-shirts overall and just buy merch as soon as you get there.
        Merch usually takes ~10 days to get to the office after you order it.
      </p>

      <ul>
        <li>10+ T-shirts</li>
        <li>10+ boxers</li>
        <li>10+ socks</li>
        <li>2x pairs of blue/gray jeans (or casual pants)</li>
        <li>1x running sneakers</li>
        <li>1x nicer shoes (Stan Smiths)</li>
        <li>2x hoodies</li>
        <li>2x light-jackets</li>
      </ul>

      <h3>Clothes, but for everything else</h3>
  
      <h4>For going out</h4>
      <p>
      <ul>
        <li>1x Illenium T-shirt (or equivalent haha)</li>
      </ul>
      </p>

      <h4>For going out to nicer places</h4>
      <p>
      <ul>
        <li>1x black dress shirt</li>
        <li>1x black jeans</li>
      </ul>
      </p>
      I don't think I ever actually wore this, but it's good to have if you go out to a nicer place for dinner.

      <h4>Office flair</h4>
      <p>Many teams run Hawaiian shirts on Fridays. I never packed this but if you want to vibe with your team, pick one up. Highly recommended for Boca teams.</p>

      <ul>
        <li>1x Hawaiian shirt</li>
      </ul>
      <h4>Beach</h4>
      <ul>
        <li>1x swim trunks</li>
        <li>3x casual shorts (Uniqlo/H&M vibes)</li>
        <li>1x flip flops</li>
        <li>1x sun-glasses (you will want these)</li>
      </ul>
      <h4>Outdoors</h4>
      <ul>
      <li>1x hiking shoes/boots, SpaceX-ers love hikes</li>
      <li>3x hiking socks (thick costco socks)</li>
      <li>1x hat/bucket-hat</li>
      <li>1x hiking pants (really useful for Boca, you can get this reimbursed lol)</li>
      <li>1x draw-string backpack, really useful for smaller hikes</li>
      <li>1x North Face Recon backpack (or any backpack with a waist-strap), really useful for longer 4+ mile hikes carrying heavier loads</li>
      <li>1x gym shorts (for gym/active)</li>
      <li>1x athletic shirt (for gym/active)</li>
      </ul>

      <h4>Boca</h4>
      <ul>
        <li>1x steel toed boots, for Hawthorne teams, SpaceX will buy them for you. For Boca teams, ask manager ahead of time.</li>
      </ul>


      <h3>Utility</h3>
      <ul>
        <li>1x passport (or ID method). Do not forget this, you need it for day-one.</li>
        <li>1x laptop</li>
        <li>1x phone</li>
        <li>1x mouse</li>
        <li>1x mouse-pad</li>
        <li>1x 60% mechanical keyboard</li>
        <li>1x water bottle</li>
        <li>1x protein shake bottle</li>
        <li>1x key-chain, useful for Hangar 18 pass</li>
        <li>2x pens</li>
        <li>1x power strip</li>
        <li>1x climbing shoes, harness, and belay device, if you're into rock climbing</li>
        <li>1x JBL Charge 4 speaker, highly reocmmended if you plan on hosting parties</li>
        <li>1x hammock, so nice on hikes...</li>
        <li>1x frisbee</li>
        <li>1x penny-board/short-board, bro longboarding in LA is so nice, but fitting this is definitely a stretch</li>
      </ul>

      <h3>Toiletries</h3>
      <ul>
        <li>?x contacts</li>
        <li>1x toothbrush</li>
        <li>1x toothpaste</li>
        <li>3x dispo-razor</li>
        <li>150x floss-picks</li>
        <li>1x "bag of common OTC meds"</li>
        <li>1x tub of hair putty</li>
      </ul>

      <h3>Camera Gear</h3>
      <p>I take photos, so I packed this stuff lol.</p>
      <ul>
        <li>1x DSLR</li>
        <li>1x tripod</li>
      </ul>

      <h3>Things I did NOT pack</h3>
      <ul>
        <li>1x mouthwash, bought it there</li>
        <li>1x sunscreen, bought it there</li>
        <li>1x spikeball set, CA roomie brought it</li>
        <li>?x more razors, bought more there</li>
        <li>1x small tub of protein powder, don't buy more than what you'll drink over the summer</li>
      </ul>

      <p>Lastly, if you're a pen-on-paper notes person, SpaceX gives you a notebook on day one so you can take work notes on that.</p>

      <ul></ul>

    </Layout>

  )
}
