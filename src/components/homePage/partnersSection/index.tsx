import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import Marquee from 'react-fast-marquee';

import DeribitLogo from '@site/static/img/partners/deribit.svg';
import ImpossibleFinLogo from '@site/static/img/partners/impossibleFinance.svg';
import MaskLogo from '@site/static/img/partners/mask.svg';
import MobileMarquee from '@site/src/components/homePage/marquee';

//todo
import styles from '@site/src/pages/index.module.css';

export const PartnersSection: FC = () => {
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    let index = 0;
    let timer = setInterval(() => {
      index++;
      if (index % 2 === 1) setPlaying(true);
      else setPlaying(false);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={clsx('container', styles.section, styles.partnersSection)}>
      <h2 className={clsx(styles.sectionTitle, styles.bigTitle)}>
        <span>Partners </span>
        who joined the Ecosystem
      </h2>
      <div className={styles.partnersLogos}>
        <div className={styles.partnerLogoWrapper}>
          <a href="https://deribit.com/"  target="_blank">
            <DeribitLogo />
          </a>
        </div>
        <div className={styles.partnerLogoWrapper}>
          <ImpossibleFinLogo />
        </div>
        <div className={styles.partnerLogoWrapper}>
          <img
            src={require('@site/static/img/partners/dappradar2x.png').default}
            style={{ width: '222px' }}
          />
        </div>
        <div className={styles.partnerLogoWrapper}>
          <MaskLogo />
        </div>
        <div className={styles.partnerLogoWrapper}>
          <img
            src={require('@site/static/img/partners/amasa2x.png').default}
            style={{ width: '101px' }}
          />
        </div>
        <div className={styles.partnerLogoWrapper}>
          <a href="https://casinostats.com/" target="_blank">
            <img
              src={require('@site/static/img/partners/cstats2x.png').default}
              style={{ width: '60px' }}
              alt="Online Casino Ratings - Casinostats.com"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
