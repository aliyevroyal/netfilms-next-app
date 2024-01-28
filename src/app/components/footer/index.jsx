import Link from "next/link";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/AlyvRoyal" target="_blank">
        Royal Aliyev
      </Link>
    </footer>
  );
}
