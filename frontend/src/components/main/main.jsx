import { Header } from '../header/header.jsx';
import { About } from '../about/about.jsx';
import { Work } from '../work/work.jsx';
import { Projects } from '../projects/projects.jsx';
import { Icons } from '../icons/icons.jsx'

import styles from './main.scss';

export const Main = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.containerInfo}>
        <section id="about" className={styles.section}><About /></section>
        <section id="work" className={styles.section}><Work /></section>
        <section id="projects" className={styles.section}><Projects /></section>
      </div>
      <Icons />
    </div>
  );
};
