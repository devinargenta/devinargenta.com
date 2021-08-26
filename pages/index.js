import styles from '../styles/Home.module.css';

import Header from '../components/Header';

function Home() {

  return (
    <div className={`${styles.page} ${styles.dark}`}>
      <div className={styles.container}>
        <Header/>
      </div>
    </div>
  );
}
export default function PageProvider(props) {
  return (
      <Home {...props} />
  );
}

export async function getStaticProps() {
  return {
    props: { },
  };
}
