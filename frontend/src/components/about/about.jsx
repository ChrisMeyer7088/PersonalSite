import styles from './about.scss';

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutHeader}>Hello my name is Chris Meyer.</h2>
      <div>
        I am a full stack software engineer that specializes in building applications for the web. I am currently working at
        <span className={styles.highlight}>Applied Medical</span> building out innovative solutions for a learning management system.
      </div>
      <div>
        <button className={styles.contactBtn}>Contact Me</button>
      </div>
    </div>
  );
};