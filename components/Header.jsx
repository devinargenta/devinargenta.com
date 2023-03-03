import Section from "./Section";
import styles from "./Header.module.css";
import Head from "next/head";
import Nav from "./Nav";
const Meta = () => (
  <Head>
    <title>devin argenta</title>
    <meta
      name="Description"
      content="the website of the worlds greatest software engineer (devin argenta) was not able to be found at this location, but this is the website of another one  who lives in brooklyn in new york city "
    ></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);
export default function Header({ children }) {
  return (
    <Section className={styles.header}>
      <div className={styles.headingWrapper}>
        <Meta />
        <h1 className={styles.h1}>devin argenta</h1>
        <Nav />
        {children}
      </div>
    </Section>
  );
}
