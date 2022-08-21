import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import { centered_img_block } from '../../components/centered_img_blocks';

// import Image from 'next/image'
// import { img_photo_descrip_block } from '../../components/img_blocks'
import styles from '../../components/layout.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';

const title = "Lovely Pina Colada"

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
      
      <h2>A smooth sweet refresher for the homies</h2>

      <p>This drink was first made in NYC on a Monday night with the homies as a just-for-fun kinda thing. It was free-handed, and I think that’s what makes it fun. Don’t worry about the exact amounts, adjust to what you think the vibes are!
      </p>

      <p>This recipe is probably enough to make 2 small/medium sized drinks.</p>

      {/* {centered_img_block('longboarding/nice-slide.jpg')} */}

      <div>
        <h3>Ingredients</h3>

        <ul>
          <li>~8x ice cubes</li>
          <li>~1.5 shots of a white or fruity rum</li>
          <li>~2 tablespoons of coconut cream</li>
          <li>~4 chunks of pineapple</li>
          <li>~5 raspberries</li>
          <li>~3 strawberries</li>
          <li>~0.5 cup club soda or sprite</li>
          <li>~1.5 cup Tropicana Pina Colada Juice</li>
        </ul>
      </div>

      <p>Prep Time: 5 minutes
      </p>

      <p><i>Note: have a few extra raspberries, halved strawberries, and ice on hand for later
      </i>
      </p>

      <p><i>Note: its okay to skip the raspberries and just use more strawberries
      </i>
      </p>

      <div>
        <h3>Instructions</h3>

        <ol>
          <li>Add all ingredients to a blender and blend until smooth (10s+)
          </li>
      
          <li>Pour blend into glass
          </li>

          <li>Top with a few raspberries directly into the glass
          </li>

          <li>Cut a notch into a strawberry and garnish on the side of the glass
          </li>

          <li>Serve and enjoy!</li>
        </ol>

      </div>

      <div>
        <h3>Fine Tuning and Thoughts</h3>

        <ul>
          <li>I think the pina colada juice is hands down the best mixer ever. I prefer it over OJ often
          </li>
          
          <li>The sprite/club soda is if people like fizziness. Skip if you don’t like fizzy
          </li>

          <li>Adjust your juice/sprite/club-soda ratios to adjust sweetness
          </li>

          <li>Add less coconut cream if it's too creamy at the top
          </li>

          <li>The goal is for the juice to look pinkish, not red. That way the garnish stands out
          </li>
        </ul>
      </div>
    </Layout>

  )
}
