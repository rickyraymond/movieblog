import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./pages/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <HomePage initialPosts={[]} />
      </div>
    </main>
  );
}
