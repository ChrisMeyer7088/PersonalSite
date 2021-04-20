import styles from './about.scss';

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutHeader}>
        <span>Hello,</span> my name is <div>Chris Meyer.</div>
      </h2>
      <div className={styles.breakLine}></div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutInfo}>
          I am a full stack software engineer that specializes in building applications for the web. I am currently working at
          <span className={styles.highlight}> Applied Medical</span> building out innovative solutions for a learning management system.
        </div>
        <div className={styles.aboutBtn}>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};