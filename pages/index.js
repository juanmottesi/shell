import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Shell!!</h1>

        <Link href="/mario">Mario</Link>

        <Link href="/luigi">Luigi</Link>
      </main>
    </div>
  );
}
