import classnames from 'classnames';
import styles from './Instagram.module.css';
import ListItem from './ListItem';

const Photo = (props) => (
  <ListItem as="li" className={styles.photo}>
    <img className={styles.img} src={props.media_url} />
    <div>{props.caption}</div>
  </ListItem>
);

export default function Instagram({ photos = [], className }) {
  const photoGrid = photos.map((item) => {
    if (Array.isArray(item.media_url)) {
      return item.media_url.map((carouselItem, index) => (
        <Photo {...carouselItem} />
      ));
    }
    return <Photo {...item} />;
  });

  return (
    <ul className={classnames(className, styles.instagram)}>{photoGrid}</ul>
  );
}
