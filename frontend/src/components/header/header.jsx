import styles from './header.scss';
import logo from '../../assets/general/cmLogo.png';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [enableShadow, setEnableShadow] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastOffSetY, setLastOffSetY] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const y = window.top.pageYOffset
      y ? setEnableShadow(true) : setEnableShadow(false);
      y > lastOffSetY ? setHideHeader(true) : setHideHeader(false);
      setLastOffSetY(y);
    };
  });
  const shadow = enableShadow ? styles.shadow : ''
  const header = hideHeader ? styles.hide : ''
  return (
    <header className={`${shadow} ${header}`}>
      <a href="/#about" className={styles.imageBox}><img src={logo} /></a>
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
