// import Head from 'next/head'
import Link from 'next/link'

export function notes_list_element(input_title, sub_folder){
    const title = input_title + "" // hack to fix next js prerenderer error
    let js_file_name = title.split(' ').join('-')
    js_file_name = js_file_name.toLowerCase()
    let full_path = `/${sub_folder}/${js_file_name}`
    return <li>
      <Link href={full_path} >
        <a>{title}</a>
        </Link>
    </li>
  }

export function notes_list_element_full(input_title, file_name, sub_folder){
    const title = input_title + "" // hack to fix next js prerenderer error
    let full_path = `/${sub_folder}/${file_name}`
    return <li>
        <Link href={full_path} >
        <a>{title}</a>
        </Link>
    </li>
    }