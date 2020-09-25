import ListItem from './ListItem';
import classnames from 'classnames';
import styles from './Letterboxd.module.css';

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
    <ListItem className={styles.movie} href={props.link._text} target="_blank">
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
    </ListItem>
  );
}

export default function LetterBoxd({ className, movies = [] }) {
  return (
    <ul className={className}>
      {movies.slice(0, 12).map((movie, index) => (
        <li key={index}>
          <LetterboxedReview {...movie} />
        </li>
      ))}
    </ul>
  );
}
