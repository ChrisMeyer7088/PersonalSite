import styles from './contact.scss';
import { Fade } from '../fade/fade.jsx';

export const Contact = () => {
  return (
    <Fade>
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h2>Get in touch</h2>
          <div className={styles.redDivider}></div>
        </div>
        <div className={styles.contactContent}>
          <p>
            Whether you have a question or just want to connect, my inbox is always open.
            So feel free to <span className={styles.orange}>come say hello</span> and I'll try my best to get back to you!
          </p>
          <div className={styles.aboutBtn}>
            <a href="mailto:chrismeyer175@gmail.com?subject=Saying%20Hello!">Say Hello</a>
          </div>
        </div>
      </div>
    </Fade>
  );
};
