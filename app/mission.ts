import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <title>GFM Automation</title>
        <meta name="description" content="GFM Automation website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

	  <div className={styles.content} style={{width: "50%", jusitfyContent: "center"}}>
          <h2 className={inter.className} style={{marginBottom: "5px"}}>
            Our Mission
          </h2>
          <p className={inter.className}>
            We are here to revolutionise small businesses worldwide! Our mission is to bring the tech solutions that exist for big businesses 
            to you: the smaller guys. We dream of a world where the little shop stands its ground alongside the magnate.
            A world where quality matters and the services of a specialist are not stagnated by price. To make this happen
            we want to make your business more profitable by giving you the tools that allow you to focus on the important stuff
            instead of routine tasks.
            We see a bright future ahead for Australia and the world. We believe that by working together we can build wonders and achieve the unimaginable!
            We believe that everyone should have the chance to break free from the routine tasks that keep them from growing. You, who yearn for more, We want to give you 
            the chance to let your imagination run wild and the freedom to create the new, the bold, the daring!
      
          We want to create the future and start an Australia wide automation revolution!
          We believe that by integrating human capacity with excellent software and machinery
          we can all live in a brighter future. Our core belief is that one person's success is everyone's success.
          We have big ideas and an even bigger drive to help you and your business thrive!
          </p>
	      </div>
      </main>
    </>
  )
}
