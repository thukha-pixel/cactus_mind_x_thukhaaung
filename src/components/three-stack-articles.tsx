import styles from './three-stack-articles.module.css';

const ThreeStackArticle: React.FC = () => {
  return (
    <div className={styles["articles-div"]}>
      <article className={styles["article"]}>
        <button className={styles["get-your-now-btn"]}>Get Your Now</button>
      </article>
      <article className={`${styles["article"]} ${styles["article-scale-up"]}`}>
        <button className={styles["get-your-now-btn"]}>Get Your Now</button>
      </article>
      <article className={styles["article"]}>
        <button className={styles["get-your-now-btn"]}>Get Your Now</button>
      </article>
    </div>
  );
};

export default ThreeStackArticle;