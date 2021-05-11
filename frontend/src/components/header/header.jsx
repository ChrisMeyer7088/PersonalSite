import { useEffect, useRef, useState } from 'react';
import HamMenu from '../../assets/general/hamMenu.png';
import logo from '../../assets/general/cmLogo.png';
import githubIcon from '../../assets/general/githubIcon.png';
import linkedInIcon from '../../assets/general/linkedInIcon.png';

import styles from './header.scss';

export const Header = ({ width }) => {
  const [enableShadow, setEnableShadow] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastOffSetY, setLastOffSetY] = useState(0);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const y = window.top.pageYOffset
      y ? setEnableShadow(true) : setEnableShadow(false);
      y > lastOffSetY ? setHideHeader(true) : setHideHeader(false);
      setLastOffSetY(y);
    };
  });
  const shadow = enableShadow ? styles.shadow : '';
  const header = hideHeader ? styles.hide : '';
  const isMobile = width < 600;
  const headerContent = isMobile ? <MobileHeaderContent setSelected={setSelected} /> : <HeaderList />

  return (
    <div>
      <header className={`${shadow} ${header}`}>
        <a href="/#about" className={styles.imageBox}><img src={logo} /></a>
        { headerContent }
      </header>
      { isMobile && <HamburgerMenu selected={selected} setSelected={setSelected} />}
    </div>
  );
};

const HeaderList = () => {
  return (
    <div className={styles.headerItems }>
      <ol className={styles.headerList }>
        <li><a href="/#about">About</a></li>
        <li><a href="/#work">Work</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ol>
      <a href="/resume" className={styles.resume}>Resume</a>
    </div>
  );
};

const HamburgerMenu = ({ selected, setSelected }) => {
  const hamContainer = useRef();
  useOutsideAlerter(hamContainer, setSelected);
  
  return (
    <div ref={hamContainer} className={`${styles.hamMenu} ${styles.hide} ${selected ? styles.show : ''}`}>
      <div onClick={() => setSelected(false)} className={styles.closeIcon}>{'\u2717'}</div>
      <HeaderList isMobile={true} />
      <div className={styles.hamIcons}>
        <a href="https://github.com/ChrisMeyer7088" target="_blank"><img className={styles.icon} src={githubIcon} /></a>
        <a href="https://www.linkedin.com/in/christophermeyer101/" target="_blank"><img className={styles.icon} src={linkedInIcon} /></a>
      </div>
    </div>
  );
}

const MobileHeaderContent = ({ setSelected }) => {
  return (
    <img onClick={() => setSelected(true)} className={styles.hamBtn} src={HamMenu} />
  );
};

function useOutsideAlerter(ref, setSelected) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setSelected(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}