import styles from "./styles.module.css";

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Hi, my name is</p>
      <h1 className={styles.heading_1}>Thanh.</h1>
      <h1 className={styles.heading_2}>Web Developer.</h1>
      <p className={styles.desc}>
      I’m a web developer who is focus on building and designing visually pleasing and easy to navigate websites. My goal is to help create web experiences that is accessible and inclusive to all.
      </p>
      <a href="#work">
        <button className={styles.btn}>Check out my work !</button>
      </a>
    </section>
  );
}

export default Home;
