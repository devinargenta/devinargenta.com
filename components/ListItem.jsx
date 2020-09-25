import classnames from 'classnames';
import styles from './ListItem.module.css';

export default function ListItem({ className, children, as = 'a', href }) {
  if (as === 'li') {
    return <li className={classnames(styles.item, className)}>{children}</li>;
  }
  return (
    <a
      className={classnames(styles.item, className)}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
