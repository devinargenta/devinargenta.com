import styles from '../styles/Home.module.css';
import { getInstagram } from '../services/instagram';
import { getLastPlayed, getTopTracks } from '../services/spotify';
import { getLetterboxd } from '../services/letterboxd';

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
    <a
      className={`${styles.item} ${styles.movie}`}
      href={props.link._text}
      target="_blank"
    >
      <div
        className={styles.movieImage}
        dangerouslySetInnerHTML={{ __html: props.description._cdata }}
      />
      <div className={styles.movieDescription}>
        <div className={styles.movieTitle}>
          <div>
            {filmTitle} [{filmYear}]
          </div>
        </div>
        <div className={styles.movieReview}>
          {stars ? stars : 'Not Rated !!'}
        </div>
      </div>
    </a>
  );
}

function LetterBoxed({ movies = [], link = {} }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.h1}>
        movie log <Via text="letterboxd" href={link._text} />
      </h2>
      <ul className={styles.grid}>
        {movies.slice(0, 12).map((props, index) => (
          <li key={index}>
            <LetterboxedReview {...props} />
          </li>
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
        <li key={index} className={`${styles.item} ${styles.photo}`}>
          <img className={styles.igPhoto} src={carouselItem.media_url} />
          <div>{item.caption}</div>
        </li>
      ));
    }
    return (
      <li key={item.id} className={`${styles.item} ${styles.photo}`}>
        <img className={styles.igPhoto} src={item.media_url} />
        <div>{item.caption}</div>
      </li>
    );
  });

  return (
    <section className={styles.section}>
      <h2 className={styles.h1}>
        photo log{' '}
        <Via
          text="instagram"
          href="https://instagram.com/personal_garbage_bin"
        />{' '}
      </h2>
      <ul className={className}>{photoGrid}</ul>
    </section>
  );
}

function Track({ name, artists, external_urls, ...rest }) {
  const [artist] = artists;
  return (
    <a
      href={external_urls.spotify}
      target="_blank"
      className={styles.trackLink}
    >
      <div className={`${styles.item} ${styles.track}`}>
        <img src={rest.album.images[2].url} />
        <div className={styles.trackInfo}>
          <div className={styles.trackName}>{name}</div>
          <div className={styles.artistName}>{artist.name}</div>
        </div>
      </div>
    </a>
  );
}

function Spotify({ topTracks, lastPlayed }) {
  const via = (
    <Via
      text="spotify"
      href="https://open.spotify.com/user/devinmetal?si=hSWYvLwaSA6o0bFtO9YoTg"
    />
  );
  const tracks = topTracks.items.map((item) => (
    <li key={item.id}>
      <Track {...item} />
    </li>
  ));
  const listening =
    lastPlayed && !lastPlayed.error ? (
      <Track {...lastPlayed.item} />
    ) : (
      'Not listening to music :/'
    );
  return (
    <section className={styles.section}>
      <h2 className={styles.h1}>current song {via}</h2>
      {listening}
      <h2 className={styles.h1}>top tracks {via}</h2>
      <ul className={styles.topTracks}>{tracks}</ul>
    </section>
  );
}

export default function Home({ lbox = {}, ig = [], spotify = {} }) {
  return (
    <div className={styles.container}>
      <Header />
      {spotify && <Spotify {...spotify} />}
      {ig && <Instagram photos={ig} />}
      {lbox && <LetterBoxed movies={lbox.item} link={lbox.link} />}
    </div>
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
