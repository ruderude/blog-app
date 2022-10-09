import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Contact.module.css'
import { Chaild } from '../../components/parts/Chaild'

const test = {
  id: 222,
  title: 'タイトル222',
  detail: 'ディティール222'
}

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="this is Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Contact</h1>
        <Chaild
          id={test.id}
          title={test.title}
          detail={test.detail}
        ></Chaild>
      </main>
    </div>
  )
}

export default Contact;
