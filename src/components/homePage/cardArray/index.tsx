import clsx from "clsx";
import React, { useEffect, useState } from "react";

import Card from "../../card";

import MaskIcon from '/img/farms/mask.svg';
import DappRadarIcon from '/img/farms/dappradar.svg';

import styles from "./index.module.css";
import Button from "@site/src/components/button";

interface ICardArray {
  handleWatchClick: () => void;
}

export default function CardArray({ handleWatchClick }: ICardArray): JSX.Element {
  const [cardClasses, setCardClasses] = useState([styles.firstCard, styles.secondCard, styles.thirdCard])


  useEffect(() => {
    setTimeout(() => {
      setCardClasses(prev => [prev[1], prev[2], prev[0]])
    }, 3000)
  }, [cardClasses])

  return (
    <>
    <div className={styles.cardsWrapper}>
      <div className={styles.backdropShadow}>
        <div className={clsx(styles.filter, styles.filter1)} />
        <div className={clsx(styles.filter, styles.filter2)} />
        <div className={clsx(styles.filter, styles.filter3)} />
      </div>
      <div className={styles.cards}>
        <Card
          posiClass={cardClasses[0]}
          name="RADAR"
          description="DappRadar"
          rewardToken="RADAR"
        >
          <DappRadarIcon />
        </Card>
        <Card
          posiClass={cardClasses[1]}
          name="Mask"
          description="Mask Network"
          rewardToken="MASK"
        >
          <MaskIcon />
        </Card>
        <Card
          posiClass={cardClasses[2]}
          name="ATTR"
          description="Attrace Protocol"
          rewardToken="ATTR"
        >
          <img src='/img/farms/attrace.png' />
        </Card>
      </div>
      <Button
        variant="tertiary"
        sizes='large'
        className={styles.watchVideoBtn}
        onClick={handleWatchClick}
      >
        <img src='/img/icons/play.svg' alt='play'/>
        Watch video on how it works
      </Button>
    </div>
    </>
  );
}
