import { useContext, useState, createContext } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { getInstagram } from '../services/instagram';
import { getLastPlayed, getTopTracks } from '../services/spotify';
import { getLetterboxd } from '../services/letterboxd';

import Header from '../components/Header';
import LetterBoxd from '../components/Letterboxd';
import Section from '../components/Section';
import Instagram from '../components/Instagram';
import { SpotifyLastPlayed, SpotifyTopTracks } from '../components/Spotify';

const Theme = createContext();

const useTheme = () => useContext(Theme);

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

function ThemeProvider({ theme, children }) {
  const [val, setTheme] = useState(theme);
  return <Theme.Provider value={[val, setTheme]}>{children}</Theme.Provider>;
}

function Via({ text, href }) {
  return (
    <div className={styles.via}>
      via&nbsp;
      <a href={href} target="_blank">
        {text}
      </a>
    </div>
  );
}

function Home({ lbox = {}, ig = [], spotify = {} }) {
  const [theme, setTheme] = useContext(Theme);

  const { LIGHT, DARK } = THEMES;

  const spotifyVia = (
    <Via
      text="spotify"
      href="https://open.spotify.com/user/devinmetal?si=hSWYvLwaSA6o0bFtO9YoTg"
    />
  );

  return (
    <div className={`${styles.page} ${styles[theme]}`}>
      <div className={styles.container}>
        <Header>
          <button
            className={styles.themeToggle}
            onClick={() => setTheme(theme === LIGHT ? DARK : LIGHT)}
          >
            {theme === LIGHT
              ? 'its too freakin bright; please turn out the lights'
              : 'please turn on the lights i cant freakin see!'}
          </button>
        </Header>
        <Section>
          <h2 className={styles.h1}>current song {spotifyVia}</h2>
          <SpotifyLastPlayed lastPlayed={spotify.lastPlayed} />
          <h2 className={styles.h1}>top tracks {spotifyVia}</h2>
          <SpotifyTopTracks topTracks={spotify.topTracks} />
        </Section>
        <Section>
          <h2 className={styles.h1}>
            photo log{' '}
            <Via
              text="instagram"
              href="https://instagram.com/personal_garbage_bin"
            />
          </h2>
          <Instagram className={styles.grid} photos={ig} />
        </Section>
        <Section>
          <h2 className={styles.h1}>
            movie log <Via text="letterboxd" href={lbox.link._text} />
          </h2>
          <LetterBoxd className={styles.grid} movies={lbox.item || []} />
        </Section>
      </div>
    </div>
  );
}
export default function PageProvider(props) {
  return (
    <ThemeProvider theme="light">
      <Home {...props} />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const ig = await getInstagram();
  const lbox = await getLetterboxd();
  const topTracks = await getTopTracks();
  const lastPlayed = await getLastPlayed();

  return {
    props: {
      lbox,
      ig,
      spotify: {
        topTracks,
        lastPlayed
      }
    },
    revalidate: 200 // In seconds
  };
}
