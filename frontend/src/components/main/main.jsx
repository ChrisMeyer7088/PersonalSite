import { useRef } from 'react';
import { Header } from '../header/header.jsx';
import { About } from '../about/about.jsx';
import { Work } from '../work/work.jsx';
import { Projects } from '../projects/projects.jsx';
import { Contact } from '../contact/contact.jsx';
import { Icons } from '../icons/icons.jsx'
import { useResize} from '../custom/useResize.jsx';

import styles from './main.scss';

export const Main = () => {
  const ref = useRef();
  const { width, height } = useResize(ref);
  const isMobile = width < 600;

  return (
    <div ref={ref} className={styles.page}>
      <Header width={width} />
      <div className={styles.containerInfo}>
        <section id="about" className={`${styles.section} ${styles.sectionHeight}`}><About /></section>
        <section id="work" className={styles.section}><Work isMobile={isMobile} /></section>
        <section id="projects" className={styles.section}><Projects isMobile={isMobile} /></section>
        <section id="contact" className={styles.section}><Contact /></section>
      </div>
      { !isMobile && <Icons />}
    </div>
  );
};