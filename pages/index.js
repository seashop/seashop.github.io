import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yummy</title>
        <meta name="description" content="yummy pc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      {/* <main className={styles.main}>
        <Link href="/list">
          list page
        </Link>
      </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
