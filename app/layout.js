import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={`${styles.page} ${styles.dark}`}>
            <Header />
          <div className={styles.container}>{children}</div>
        </div>
      </body>
    </html>
  );
}
