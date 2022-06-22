import React, {FC, useEffect, useState} from 'react'
import clsx from "clsx";
import Marquee from "react-fast-marquee";

import DeribitLogo from "@site/static/img/partners/deribit.svg";
import ImpossibleFinLogo from "@site/static/img/partners/impossibleFinance.svg";
import MaskLogo from "@site/static/img/partners/mask.svg";
import MobileMarquee from "@site/src/components/homePage/marquee";

//todo
import styles from "@site/src/pages/index.module.css";

export const PartnersSection: FC = () => {
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    let index = 0
    let timer = setInterval(() => {
      index++
      if (index % 2 === 1) setPlaying(true)
      else setPlaying(false)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={clsx("container", styles.section, styles.partnersSection)}
    >
      <h2 className={clsx(styles.sectionTitle, styles.bigTitle)}>
        <span>Partners </span>
        who joined the Ecosystem
      </h2>
      <div className={styles.partnersLogos}>
        <div className={styles.filter} />
        <div className={styles.marqueeContainer}>
          <Marquee speed={100} play={playing}>
            <DeribitLogo />
            <ImpossibleFinLogo />
            <img
              src={require("@site/static/img/partners/dappradar2x.png").default}
              style={{ width: "222px" }}
            />
            <MaskLogo />
            <img src={require("@site/static/img/partners/amasa2x.png").default}
                 style={{ width: "101px" }}
            />
            <img
              src={require("@site/static/img/partners/despace2x.png").default}
              style={{ width: "107px" }}
            />
          </Marquee>
        </div>
        <MobileMarquee />
      </div>
    </div>
  );
};