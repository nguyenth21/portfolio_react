import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Hello! My name is Thanh and I am blessed with the opportunity to build projects to show the world. My first experience with web development started in 2002 in my freshman computer technology class when I was building a webpage for japanese cars using HTML and CSS even though I didn't know what that was.
          </p>
          <p className={styles.desc}>
            20 years have past and now I am finally taking the leap back into what made me excited to learn and be able to experiment with again. I am currently finishing up my Web Developer bootcamp and just taking in all of the new knowledge that has been shown to me. My main focus is to start building for a company while continue to challenge myself to learn more and do more.
          </p>
        </div>
        <div className={styles.right}>
          <img
            src="./images/profile.jpg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
