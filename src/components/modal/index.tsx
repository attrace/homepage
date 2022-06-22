import React, {FC, useEffect} from 'react'

import styles from './index.module.css';

export const Modal: FC = ({ children }) => {

  useEffect(() => {
    document.body.style.setProperty('overflow', 'hidden');
    return () => {
      document.body.style.setProperty('overflow', 'visible');
    }
  }, [])

  return (
    <section className={styles.modalCurtain} >
      <div className={styles.modal}>
        {children}
      </div>
    </section>
  );
};