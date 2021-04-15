import styles from './header.scss';
import logo from '../../assets/images/cmLogo.png'

export const Header = () => {
  return (
    <header>
      <a className={styles.imageBox}><img src={logo} /></a>
      <div className={styles.headerItems}>
        <ol className={styles.headerList}>
          <li><a href="/#about">About</a></li>
          <li><a href="/#experince">Experince</a></li>
          <li><a href="/#work">Work</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ol>
        <div className={styles.resume}>Resume</div>
      </div>
    </header>
  );
};
