import Link from "next/link";
import * as styles from './Nav.module.css';
export default function Nav() {
    return <nav
        className={styles.nav}
    >
        <Link href="/">~/home</Link>
        <Link href="/cambar" passHref={true}>
            ~/macos/cambar
        </Link>
        <a
            href="https://www.github.com/devinargenta"
            target="_blank"
            rel="noreferrer"
        >
            github.com
        </a>
    </nav>;
}
