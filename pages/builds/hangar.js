import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Image from 'next/image'
import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'


export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Remote Control Aircraft Hangar</title>
      </Head>
      <h1>Remote Control Aircraft Hangar</h1>
      
      <Link href="/builds/builds-landing">
        <a>Back to builds</a>
      </Link>
      <br></br>

      <h2>Thoughts</h2>
      I'll go over every plane I've ever built and flown.
      I've listed the aircraft in the order that I built them (all these pictures are from high school haha).
      I added a quick description of each plane and my memories of flying them.
      <br></br>
      <br></br>

      <hr></hr>
      {img_photo_descrip_block("FT-22",
        "This is the first RC aircraft I ever built. Even though it was a speed built kit, " +
        "I was still incredibly proud of it. It very quickly became too heavy for it to fly well, " +
        "but even so it hung in there as a floater real well. " +
        "I've got a 109 Airforce dedicated to Mr. Huang paint scheme on it.",
        '/images/hangar/ft22.jpg',
        '')}

      {img_photo_descrip_block("FRC SU-37 Mk2",
        "This bad boy is fast. It was truly super maneuverable, and I loved the paint job too. " + 
        "Unfortunately I built and flew this guy before I had the skill to control it. " +
        "Nonetheless, I had tons of fun while it was airworthy.",
        '/images/hangar/su37.jpg',
        '')}

      {img_photo_descrip_block("RC Powers F-35 V3",
        "RC Powers did a great job of designing this guy. While they were around they inspired so many of my generation. It's the perfect combination of chillax, and maneuverable. The giant lifting central body makes it easy for low speed cruising, while the massive control surfaces give it plenty of capability to pull off stunts.",
        '/images/hangar/f35.jpg',
        '')}

      {img_photo_descrip_block("UAV Trainer",
        "I built this guy in one afternoon, with no real regard for design, just wanted to get it in the air as fast as possible. It turned out a little ugly, and a little tail heavy, so it didn't do too well as a trainer. However, it had plenty of cargo area. Thus, I converted it into a UAV. Off of this platform, I became familiar with UAV design and operations for fixed wing aircraft.",
        '/images/hangar/uav.jpg',
        '')}

      {img_photo_descrip_block("FT Tiny Trainer",
        "Great trainer honestly. You can cruise at ~10 % throttle with ease.",
        '/images/hangar/trainer.jpg',
        '')}

      {img_photo_descrip_block("FT-22 Mini",
        "I've built two now, and these fly like madmen, nothing like their older brother. If you've got them trimmed up though, they'll spin, roll and flip all day.",
        '/images/hangar/mft22.jpg',
        '')}

      {img_photo_descrip_block("FT Vector",
        "Think of it as a slower FT-22 Mini that is a little more forgiving to fly. You're likely to lose more altitude in a roll though.",
        '/images/hangar/vector.jpg',
        '')}

      {img_photo_descrip_block("FT Arrow",
        "The flying wing nature of the FT Arrow lets it glide so well. The lack of any kind of tail/boom also lets it reach a high top speed. The only real downside is its slow roll rate.",
        '/images/hangar/arrow.jpg',
        '')}
      
      {img_photo_descrip_block("F86 Mk2",
        "My pride and pleasure, but the scariest to fly.        ",
        '/images/f86/F86mk2_glory.jpg',
        '')}


    </Layout>

  )
}
