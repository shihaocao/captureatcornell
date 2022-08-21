import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
// import Image from 'next/image'
import { triple_centered_img_block } from '../../components/centered_img_blocks'
import styles from '../../components/layout.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';

const title = "Luke Marino Pasta"

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
      
      <h2>A great wholesome pasta to make for the homies.</h2>

      Luke Marino first made this for the boys at DDSS, and every rendition since has always brought good vibes to the homies.

      <p>It's a nice, rich, veggie-heavy, and marinara-based pasta.</p>

      <p>This recipe probably serves like 6 or 7 big homies.</p>

      {triple_centered_img_block("pasta/pasta2.jpg",
                                 "pasta/pasta1.jpg",
                                 "pasta/pasta3.jpg")}

      <div>
        <h3>Ingredients</h3>

        <ul>
          <li>1x box of pasta marked with 8-ish servings</li>
          <li>1x box of button mushrooms (12 oz)</li>
          <li>1x large onion</li>
          <li>1x box of cherry tomatoes, the smaller tomatoes are sweeter and nicer</li>
          <li>1x large double handful of spinach</li>
          <li>1x lb of ground meat (optional)</li>
          <li>"Meat seasonings"</li>
          <li>1x cubic inch of butter</li>
          <li>1x large can of marinara sauce (8+ servings)</li>
          <li>1x or 2x box of chicken broth</li>
          <li>3x various bell peppers of red/orange/yellow</li>
        </ul>

      </div>

      <div>
        <h3>Instructions</h3>



        <ol>
          <li>Add chicken broth to pot, add additional water + salt until enough to cook pasta, bring to boil</li>
          <li>Put spinach in water to let bitter flavor out</li>
          <li>Chop onion</li>
          <li>Cut peppers into strips</li>
          <li>Lightly oil a large wok, and saute onions</li>
          <li>Add peppers to the wok, and saute. Cook both until softer</li>
          <li>Add pasta to boiling water</li>
          <li>Cut mushrooms into slices, add to wok</li>
          <li>Halve all cherry tomatoes</li>
          <li>Optionally cook meat in separate pan</li>
          <li>Once veggies, add tomatoes</li>
          <li>When pasta is done, strain, and add some butter</li>
          <li>In a large pot on medium heat, mix the pasta, veggies, (meat), marinara sauce, spinach</li>
          <li>Serve and enjoy</li>
        </ol>

      </div>
    </Layout>

  )
}
