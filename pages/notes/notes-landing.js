import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import styles from '../../components/layout.module.css'
import { notes_list_element, notes_list_element_full } from '../../components/landing-elements'

export function front_page_post_list(){
    return <ul>
      {notes_list_element("Seeking Epilogue", "notes")}
      {notes_list_element("Packing for SpaceX", "notes")}
      {notes_list_element("Marino Pasta Recipe", "notes")}

      {/* {notes_list_element("Rapid Prototyping Quick Reference", "notes")} */}
      <li><Link href="/notes/notes-landing" >
      <a>more</a>
      </Link>
      </li>
    </ul>
  }
  
  export function full_post_list(){
    return <ul>
      {notes_list_element("Packing for SpaceX", "notes")}
      {notes_list_element("Marino Pasta Recipe", "notes")}
      {notes_list_element("Rapid Prototyping Quick Reference", "notes")}
      {/* {notes_list_element("Economics Quick Reference", "notes")} */}
      {notes_list_element("Lovely Pina Colada", "notes")}
      {notes_list_element("Seeking Epilogue", "notes")}

      {notes_list_element_full("How I Made This Website", "how-i-made-this-website", "notes")}
      {notes_list_element_full("Longboarding", "longboarding", "notes")}

    </ul>
  }
  
    export default function FirstPost() {
        return (
            <Layout layout_type={styles.container}>
            <Head>
                <title>Notes</title>
            </Head>
            <h1>Notes</h1>

            <h2>A place to share my notes</h2>

            <p>
            I found myself wanting a place to put my random thoughts, notes, pdfs, and guides. So putting this up publicly to share.
            </p>

            {full_post_list()}

            <br></br>

            </Layout>

        )
    }
  