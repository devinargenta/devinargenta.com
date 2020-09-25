import styles from './Section.module.css';
import classnames from 'classnames';

export default function Section({ children, className }) {
  return (
    <section className={classnames(styles.section, className)}>
      {children}
    </section>
  );
}
