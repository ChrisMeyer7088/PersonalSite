import { Header } from '../header/header.jsx';
import { About } from '../about/about.jsx';

import styles from './main.scss';

export const Main = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div class={styles.containerInfo}>
        <About />
      </div>
    </div>
  );
};
