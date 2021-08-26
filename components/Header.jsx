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

            content="the website of the worlds greatest software engineer (devin argenta) was not able to be found at this location, but this is the website of another one  who lives in brooklyn in new york city "
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
);
export default function Header({children}) {
    return (
        <Section className={styles.header}>
            <Meta />
            <h1 className={styles.h1}>devin argenta</h1>
            <p className={styles.introText}>
                one of the greatest software engineers listed on this website
            </p>
            <p>currently located @ brooklyn, ny with my big weird dog ava </p>
            <p>eng lead / eng manager @ Diameter Health</p>
            <p>
                previously senior software engineer @ BuzzFeed
                <br />
                previously senior front end dev @ ESPN
            </p>
            <p>
                <a href="https://www.github.com/devinargenta">github</a>
            </p>
            {children}
        </Section>
    );

}
