import Image from 'next/image'
import styles from './page.module.css'
import Heading from '@/components/Heading'
import Peragraph from '@/components/Peragraph'
import Div from '@/components/Div'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Heading title="This is title"/>
      <Heading title="Hello world"/>
      <Peragraph title="Creative IT Institute"/>
      <Div>
        <a href='#'>facebook</a>
        <p>lorem text</p>
        <Heading title="under div parent element"/>
      </Div>
    </>
  )
}
