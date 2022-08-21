import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../components/layout.module.css'

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Shihao's Photography</title>
      </Head>
      <h1>Photography</h1>
      
      <h2>Gear</h2>
      I currently shoot with a Nikon D810. For lenses, I usually use a 28-300 zoom just because it's versatile.
      I also carry at 35mm APS-C f1.8 for street photography and portrait photography.

      <h2>What am I up to?</h2>

      I am still learning how to use cameras, and what kind of shots I'm looking for! I do a little bit of everything...
      &nbsp;
      :)

      <h2> Enjoy! </h2>

      {img_block("Studying on the Arts Quad", "/photography/studying.jpg", "", "Nikon D5100", "125mm", "f5.0")}
      {img_block("Jumping", "/photography/jumping.jpg", "", "Nikon D5100", "50mm", "f1.8")}
      {img_block("Amtrak", "/photography/amtrak.jpg", "", "iPhone 13 Pro", "26mm", "f1.5")}
      {img_block("Trolley", "/photography/sf_trolley_bridge.jpg", "", "Nikon D810", "92mm", "f5.3")}
      {img_block("Peekaboo", "/photography/peek.jpg", "", "Nikon D5100", "50mm", "f1.8")}
      {img_block("Lips", "/photography/lips2.jpg", "", "Nikon D5100", "50mm", "f1.8")}
      {img_block("Midtown", "/photography/midtown.jpg", "", "Nikon D5100", "24mm", "f22")}
      {img_solo_block("Me on the Hunt for the Shot", "/photography/rain_hunting.jpg", "", "iPhone12")}


      {/* <style jsx>{`
        .photo-div {
          margin-top: 1.0rem;
          margin-bottom: 1.0rem
        }
      `}</style> */}

    </Layout>

  )
}

function img_descrip_block(camera, lens, f_stop) {
    return (
        <p>
        {camera}
        &nbsp;&nbsp;|&nbsp;&nbsp;
        {lens}
        &nbsp;&nbsp;|&nbsp;&nbsp;
        {f_stop}
      </p>
)}

function img_block(title, src, alt, camera, lens, f_stop) {
  return (
    <div>
    <h3>{title}</h3>
    { img_descrip_block(camera, lens, f_stop) }
    <div className='photo-div'>
    {/* <Image src="/photography/jumping.jpg" alt="me" width="4000" height="600" /> */}
    <img
      src = {src}
      alt = {alt}
      layout='fill'
      objectFit='contain'
      loading="lazy"
    />
    </div>
    <hr></hr>
    </div>
    
  )
}

function img_solo_block(title, src, alt, camera) {
  return (
    <div>
    <h3>{title}</h3>
    <p>
      {camera}
    </p>
    <div className='photo-div'>
    {/* <Image src="/photography/jumping.jpg" alt="me" width="4000" height="600" /> */}
    <img
      src = {src}
      alt = {alt}
      layout='fill'
      objectFit='contain'
      loading="lazy"
    />
    </div>
    <hr></hr>
    </div>
    
  )
}

