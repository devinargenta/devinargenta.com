import classnames from 'classnames';
import Section from './Section';
import styles from './Header.module.css';
import Head from 'next/head';

const Meta = () => (
  <Head>
    <title>
      devin argenta - the worlds greatest software engineer ( is not listed on
      this website )
    </title>
    <meta
      name="Description"
      content="the website of the worlds greatest software engineer was not able to be found at this location, but this is the website of another one  who lives in brooklyn in new york city "
    ></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);
export default function Header({ children }) {
  return (
    <Section className={styles.header}>
      <Meta />
      <h1 className={styles.h1}>devin argenta</h1>
      <p className={styles.introText}>
        one of the greatest software engineers listed on this website
      </p>
      <p>i live in brooklyn, ny with my giant freak dog named ava</p>
      <p>
        currently a senior software engineer @ BuzzFeed
        <br />
        previously @ ESPN
      </p>
      <p>
        <a
          target="_blank"
          href="mailto:devin@devinargenta.com?subject=I WAS LOOKING AT YOUR WEBSITE"
        >
          send me a compliment
        </a>
      </p>
      <p>
        look at my{' '}
        <a target="_blank" href="https://www.instagram.com/devincantdraw">
          poor art skills
        </a>
      </p>
      <p>
        u can look at my{' '}
        <a href="https://www.github.com/devinargenta">github</a> but it is
        boring
      </p>
      {children}
    </Section>
  );
}
