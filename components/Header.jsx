import Section from "./Section";
import styles from "./Header.module.css";

import Nav from "./Nav";

export default function Header({ children }) {
  return (
    <Section className={styles.header}>
      <div className={styles.headingWrapper}>
        <h1 className={styles.h1}>devin argenta</h1>
        <Nav />
        {children}
      </div>
    </Section>
  );
}
