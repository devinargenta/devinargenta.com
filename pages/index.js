import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { xml2json } from 'xml-js';

const Header = () => {
  const className = [styles.section, styles.header].join(' ');
  return (
    <section className={className}>
      <h1 className={styles.h1}>devin argenta</h1>
      <p className={styles.introText}>
        one of the greatest software engineers listed on this website
      </p>
      <p>
        currently a senior software engineer @ BuzzFeed
        <br />
        previously @ ESPN
      </p>
      <p>
        u can look at my <a href="https://www.github.com/devinargenta">github</a> but it is boring
      </p>
    </section>
  );
};

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

function LetterboxedReview(props) {
  let filmTitle = props['letterboxd:filmTitle'];
  const rating = props['letterboxd:memberRating'];
  if (!filmTitle) {
    // throw away list edits
    return null;
  }
  const filmYear = props['letterboxd:filmYear']._text;
  const stars = rating && rating._text;
  filmTitle = filmTitle._text;
  return (
    <li className={styles.movieList__item} key={props.guid._text}>
      <a className={styles.movieLink} href={props.link._text} target="_blank">
        <span>
          {filmTitle} [{filmYear}]
        </span>
      </a>
      {stars || <span>Not Rated !!</span>}
    </li>
  );
}

function LetterBoxed({ movies = [], link = {} }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.h1}>movie log  <Via text="letterboxd" href={link._text} /></h2>
      <ul className={styles.grid}>
        {movies.map((props, index) => (
          <LetterboxedReview {...props} key={index} />
        ))}
      </ul>
     
    </section>
  );
}

function Instagram({ photos = [] }) {

  const className = [styles.grid, styles.grid__ig].join(' ');

  const photoGrid = photos.map((item) => {
    if (Array.isArray(item.media_url)) {
      return item.media_url.map((carouselItem, index) => (
        <li key={index} className={styles.igItem}>
          <img className={styles.igPhoto} src={carouselItem.media_url} />
          <div>{item.caption}</div>
        </li>
      ));
    }
    return (
      <li key={item.id} className={styles.igItem}>
        <img className={styles.igPhoto} src={item.media_url} />
          <div>{item.caption}</div>
      </li>
    );
  });

  return (
    <section className={styles.section}>
      <h2 className={styles.h1}>photo log  <Via text="instagram" href="https://instagram.com/personal_garbage_bin" /> </h2>
      <ul className={className}>{photoGrid}</ul>
     
    </section>
  );
}

export default function Home({ lbox = {}, ig = [] }) {
  return (
    <div className={styles.container}>
      <Header />
      {ig && <Instagram photos={ig} />}
      {lbox && <LetterBoxed movies={lbox.item} link={lbox.link} />}
    </div>
  );
}

export async function getStaticProps() {
  const token = process.env.IG_TOKEN;
  const user = process.env.IG_USER;
  const getMediaURL = (id) => {
    return `https://graph.instagram.com/${id}/children?fields=media_url,id,media_type&access_token=${token}`;
  };

  async function getIG() {
    try {
      const res = await fetch(
        `https://graph.instagram.com/${user}/media?fields=caption,media_url,id,media_type&access_token=${token}&limit=10`
      );
      const { data } = await res.json();
      const carousels = data.filter(
        ({ media_type }) => media_type === 'CAROUSEL_ALBUM'
      );

      for (let obj of data) {
        if (obj.media_type === 'CAROUSEL_ALBUM') {
          const req = await fetch(getMediaURL(obj.id));
          const { data } = await req.json();
          obj.media_url = data;
        }
      }

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  const res = await fetch(`https://letterboxd.com/steelydevin/rss/`);
  const xml = await res.text();
  const { rss } = JSON.parse(xml2json(xml, { compact: true, spaces: 2 }));

  const ig = await getIG();

  return {
    props: {
      lbox: rss.channel,
      ig
    },
    revalidate: 3600, // In seconds
  };
}
