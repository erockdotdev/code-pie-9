import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>We have snacks!</h1>
        <br />
        {/* <h3> */}
        <a href="mailto:snacks@codepie9.com">snacks@codepie9.com</a>
        {/* </h3> */}
      </div>
    </main>
  );
}
