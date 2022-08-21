import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'

const neg_margin = -10

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Remote Control F-86</title>
      </Head>
      <h1>Remote Control F-86</h1>
      
      <Link href="/builds/builds-landing">
        <a>Back to builds</a>
      </Link>
      <br></br>

      <div className='photo-div'>
        {/* <Image src="/photography/jumping.jpg" alt="me" width="4000" height="600" /> */}
        <img
        src = '/images/f86/F86mk2_glory.jpg'
        alt = ''
        layout='fill'
        objectFit='contain'
        loading="lazy"
        />
      </div>
      <h2>Current Version: MK2</h2>

      I designed, built and flew a remote control F-86 since I wanted to fly this at the RC scale. It is a 3-channel 64mm EDF aircraft. It flies with a 4S power system. (More details below)
      The Mk2 is a heavier and faster version of the original Mk1. 

      <h2>Plans</h2>
        <p>Here are the plans for my foam board EDF F86.</p>

        <div style={{margin: 40, textAlign: 'center'}}>
        <a href="files/F86mk2D.dxf" className="card" download><b>Download DXF</b></a>
        <a href="files/F86mk2Dpdf.zip" className="card" download><b>Download PDF</b></a>
        </div>


      {/* <hr></hr> */}

      <h2>Extra Details</h2>
        <p>It's got a removable wing that is rubber-banded on. The hatch is now magnetic which is an upgrade from the first version.
        </p>
        <p>It weighs 670g with the battery. It has approximately 670g of static thrust and can sustain that for 2-3 minutes. Peak static thrust is 880g, but this is only maintained for the first 10 seconds of flight, enough for a take off.
        In the air, I suspect the thrust climbs higher due to a &gt;0 intake airspeed. The thrust tube is still ~1 foot long with ~85% fan swept area at the exhaust.
        </p>

        <h2>Parts</h2>
        <p>Here are the parts I used. If you can't find these exact parts, you should try to purchase similar parts with similar performances.
        </p>
        <h4>Battery</h4>
        <ul>
          <li><a href= "https://www.amazon.com/gp/product/B00TDCDT7C/" target="_blank">2200 mah 4S 40C LiPO</a></li>
        </ul>
        <h4>ESC</h4>
        <ul>

          <li><a href= "https://www.amazon.com/gp/product/B0771HPTMW/" target="_blank">70A Brushless ESC</a></li>
        </ul>
        <h4>EDF</h4>
        <ul>

          <li><a href= "https://www.amazon.com/T-Trees-Blades-Ducted-3500KV-Airplane/" target="_blank">12 Blade 64mm EDF 3500 KV</a></li>
        </ul>
        <h4>Accessories</h4>
        <ul>
          <li><a href= "https://www.amazon.com/Fly-Sky-2-4G-6-Channel-Receiver-CT6B/dp/9269807258/" target="_blank">5+ Channel RX (I like to have each control surface linked to its own channel for custom trimming of each surface)</a></li>
          <li><a href= "https://www.amazon.com/gp/product/B00X7CJZWM/" target="_blank">4x 9g Servo</a></li>
          <li><a href= "https://www.amazon.com/Haobase-Remote-Control-Female-Extension/dp/B01DLXG83A/" target="_blank">2x 6" Servo Extension</a></li>

          <li><a href= "https://www.amazon.com/gp/product/B0036R4SUW/" target="_blank">~4' Pushrod</a></li>
          <li><a href= "https://www.amazon.com/gp/product/B001K7KR96/" target="_blank">12" x 12" x .007" plastic sheet for EDF thrust tube</a></li>
          <li><a href= "https://store.flitetest.com/flite-test-water-resistant-foam-board-by-adams-25-pack/" target="_blank">2 x 20" x 30" Foamboard</a></li>
        </ul>

      <hr></hr>

      <h2>How to Build It</h2>

      I'll be posting more information soon! If you're in a hurry, don't hesitate to contact me. :)

      <h2>Why I Built It</h2>

      <p>I used Fusion 360 to design the entire aircraft. I then used a bit of AutoCAD to help export my designs for laser cutting.
      If you're interested in the details of the design work or would like to make your own,
      check out my <Link href="https://www.youtube.com/user/Shasty88">YouTube Channel</Link>!</p>

      <h2>Pictures</h2>

      {img_photo_descrip_block("In Flight", "Here is a picture of it in flight shortly after launch.", '/images/f86/mk2fly1.jpg', 'F-86 Mk2 in flight')}
      {img_photo_descrip_block("On Landing Final", "It lands very fast, and has a long smooth final approach.", '/images/f86/mk2fly2.jpg', 'F-86 Mk2 on final')}
      {img_photo_descrip_block("Helping Hands",
        "I want to give a shout out to Mike Marr who helped me launch the Mk2, and also had supplies on hand so that I could repair it at the field.",
        '/images/f86/mike_marr.jpg',
        'Myself and Mike Marr')}
      {img_photo_descrip_block("Paint Scheme",
        "The paint scheme is modelled after the Japanese Blue Impulse Demo team, which used F86-F40s.",
        '/images/f86/F86mk2_glory.jpg',
        'Paint Scheme')}
      {img_photo_descrip_block("A Bottom Glance",
        "A glance at the bottom, giving a better look at the rubber bands holding the wing on.",
        '/images/f86/bottom_glance.jpg',
        'Bottom Glance')}
      {img_photo_descrip_block("Power System Comparison",
        "The old Mk1 3s System on the left, the current Mk2 4s system on the right.",
        '/images/f86/power_system_compare.jpg',
        'Power Systems')}

      {/* <style jsx>{`
        .photo-div {
          margin-top: 1.0rem;
          margin-bottom: 1.0rem
        }
      `}</style> */}

    </Layout>

  )
}
