import { Header } from '../header/header.jsx';
import { About } from '../about/about.jsx';
import { Work } from '../work/work.jsx';

import styles from './main.scss';

export const Main = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.containerInfo}>
        <section id="about" className={styles.section}><About /></section>
        <section id="work" className={styles.section}><Work /></section>
      </div>
    </div>
  );
};
