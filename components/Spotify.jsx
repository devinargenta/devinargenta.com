import classnames from 'classnames';
import ListItem from './ListItem';
import styles from './Spotify.module.css';

export function Track({ name, artists, external_urls, ...rest }) {
  const [artist] = artists;
  return (
    <ListItem
      href={external_urls.spotify}
      target="_blank"
      className={classnames(styles.trackLink)}
    >
      <img src={rest.album.images[2].url} />
      <div className={styles.trackInfo}>
        <div className={styles.trackName}>{name}</div>
        <div className={styles.artistName}>{artist.name}</div>
      </div>
    </ListItem>
  );
}

export function SpotifyLastPlayed({ lastPlayed = {} }) {
  const listening =
    lastPlayed && !lastPlayed.error ? (
      <Track {...lastPlayed.item} />
    ) : (
      'Not listening to music :/'
    );
  return listening;
}

export function SpotifyTopTracks({ topTracks = {} }) {
  const tracks = topTracks.items.map((item) => (
    <li key={item.id}>
      <Track {...item} />
    </li>
  ));

  return <ul className={styles.topTracks}>{tracks}</ul>;
}
