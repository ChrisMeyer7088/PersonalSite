import styles from './header.scss';

export const Header = () => {
  return (
    <header>
      {/* TODO ADD ICON */}
      <img />
      <div className={styles.headerItems}>
        <ol className={styles.headerList}>
          <li><a href="/#about">About</a></li>
          <li><a href="/#experince">Experince</a></li>
          <li><a href="/#work">Work</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ol>
        <div>Resume</div>
      </div>
    </header>
  );
};
