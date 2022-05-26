import clsx from "clsx";
import React, { useEffect, useState } from "react";

import Card from "../../card";

import styles from "./index.module.css";

export default function CardArray(): JSX.Element {
  const [cardClasses, setCardClasses] = useState([styles.firstCard, styles.secondCard, styles.thirdCard])
  useEffect(() => {
    setTimeout(() => {
      setCardClasses(prev => [prev[1], prev[2], prev[0]])
    }, 3000)
  }, [cardClasses])
  return (
    <div className={styles.cards}>
      <div className={clsx(styles.filter, styles.filter1)} />
      <div className={clsx(styles.filter, styles.filter2)} />
      <div className={clsx(styles.filter, styles.filter3)} />
      <Card
        posiClass={cardClasses[0]}
        name="RADAR" description="DappRadar"
        src="/img/farms/radar.png"
      />
      <Card
        posiClass={cardClasses[1]}
        name="Mask" description="Mask Network"
        src="/img/farms/mask.png"
      />
      <Card
        posiClass={cardClasses[2]}
        name="ATTR" description="Attrace Protocol"
        src="/img/farms/attr.png"
      />
    </div>
  );
}
