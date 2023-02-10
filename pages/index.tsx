import Head from 'next/head'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App Bootstrap</title>
        <meta name="description" content="Fleek Next JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Fleek
        </h1>
      </main>
    </>
  )
}
