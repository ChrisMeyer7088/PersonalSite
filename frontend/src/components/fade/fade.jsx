import { useEffect, useState, useRef } from 'react';

import styles from './fade.scss';

export const Fade = ({
  children,
}) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe: 
      console.log(entries)    
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      ref={ domRef }
      className={`${styles.fade} ${isVisible ? styles.visible : ''}`}
    >
      { children }
    </div>
  );
};
