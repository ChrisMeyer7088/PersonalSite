const githubIcon = 'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/General/githubIcon.png';
const linkedInIcon = 'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/General/linkedInIcon.png';

import styles from './icons.scss';

export const Icons = () => {
  return (
    <div className={styles.iconsContainer}>
      <div className={styles.line} ></div>
      <a href="https://github.com/ChrisMeyer7088" target="_blank"><img className={styles.icon} src={githubIcon} /></a>
      <div className={styles.line} ></div>
      <a href="https://www.linkedin.com/in/christophermeyer101/" target="_blank"><img className={styles.icon} src={linkedInIcon} /></a>
      <div className={styles.line} ></div>
    </div>
  );
}