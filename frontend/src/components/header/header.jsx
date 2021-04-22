import styles from './header.scss';
import logo from '../../assets/images/cmLogo.png';

export const Header = () => {
  return (
    <header>
      <a className={styles.imageBox}><img src={logo} /></a>
      <div className={styles.headerItems}>
        <ol className={styles.headerList}>
          <li><a href="/#about">About</a></li>
          <li><a href="/#work">Work</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ol>
        <a href="/resume" className={styles.resume}>Resume</a>
      </div>
    </header>
  );
};
