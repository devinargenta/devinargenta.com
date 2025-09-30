import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/next"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>devin argenta</title>
        <meta
          name="Description"
          content="the website of the worlds greatest software engineer (devin argenta) was not able to be found at this location, but this is the website of another one  who lives in brooklyn in new york city "
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className={`${styles.page} ${styles.dark}`}>
          <Header />
          <div className={styles.container}>{children}</div>
        </div>
      </body>
    </html>
  );
}
