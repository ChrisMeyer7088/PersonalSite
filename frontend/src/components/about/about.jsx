import styles from './about.scss';
import { Fade } from '../fade/fade.jsx';

export const About = () => {
  return (
    <Fade>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutHeader}>
          <span>Hello,</span> my name is <div>Chris Meyer.</div>
        </h2>
        <div className={styles.breakLine}></div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutInfo}>
            I am a full stack software engineer that specializes in building applications for the web. I am currently working at
            <span className={styles.highlight}> 2U</span> building out web application tools for university students and faculty.
          </div>
          <div className={styles.aboutBtn}>
            <a href="mailto:chrismeyer175@gmail.com?subject=Saying%20Hello!">Say Hello</a>
          </div>
        </div>
      </div>
    </Fade>
  );
};
