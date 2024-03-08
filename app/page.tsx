import Head from 'next/head'
import Image from 'next/image'
import { Inter } from "next/font/google";
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <title>GFM Automation</title>
        <meta name="description" content="GFM Automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
	  <div className={styles.center2}>
          <a
            href="/pages/manufacturing.js"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Create The Future! <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             Want to innovate the way you manufacture? 
	    </p>
            <p className={inter.className}>
	      Speak to us about our mechatronics consulting services!
            </p>
          </a>

          <a
            href="/pages/process-automation.js"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Automate Repetitive Tasks <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            	Are repetitive tasks slowing your growth?
	    </p>
            <p className={inter.className}>
		Let us find automatic solutions to keep your business growing!
	    </p>
          </a>

          <a
            href="/pages/index.js"
	    className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Cultivate Your Clients <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            	Want to get to know your business better?
	    </p>
            <p className={inter.className}>
		Our business analysts can bring light to your data!
	    </p>
          </a>
	</div>
      </main>
    </>
  )
}
