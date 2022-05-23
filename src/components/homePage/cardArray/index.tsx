import clsx from "clsx";
import React, { useMemo, useState } from "react";

import styles from "./index.module.css";

export default function CardArray(): JSX.Element {
  const [cardClasses, setCardClasses] = useState([styles.firstCard, styles.secondCard, styles.thirdCard]);
  let timer
  useMemo(() => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      let tmp = [...cardClasses]
      const first = tmp.shift();
      tmp.push(first);
      setCardClasses(tmp);
    }, 3000)
  }, [cardClasses])
  return (
    <div className={styles.cards}>
      {/* <div className={clsx(styles.filter, styles.filter1)} />
      <div className={clsx(styles.filter, styles.filter2)} />
      <div className={clsx(styles.filter, styles.filter3)} /> */}
      <div className={clsx(styles.statsCard, cardClasses[0])}>
        <div className={styles.info}>
          <div className={styles.icon}>
            <img src="/img/farms/radar.png" />
          </div>
          <div>
            <div className={styles.name}>RADAR</div>
            <div className={styles.description}>DappRadar</div>
          </div>
        </div>
        <div className={styles.figure}>
          <div>
            <div className={styles.propname}>Estimated APR</div>
            <div className={styles.apr}>🔥%</div>
          </div>
          <div>
            <div className={styles.propname}>Daily Farm Rewards</div>
            <div className={styles.apr}>🤑 wETH</div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.statsCard, cardClasses[1])}>
        <div className={styles.info}>
          <div className={styles.icon}>
            <img src="/img/farms/mask.png" />
          </div>
          <div>
            <div className={styles.name}>Mask</div>
            <div className={styles.description}>Mask Network</div>
          </div>
        </div>
        <div className={styles.figure}>
          <div>
            <div className={styles.propname}>Estimated APR</div>
            <div className={styles.apr}>🔥%</div>
          </div>
          <div>
            <div className={styles.propname}>Daily Farm Rewards</div>
            <div className={styles.apr}>🤑 MASK</div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.statsCard, cardClasses[2])}>
        <div className={styles.info}>
          <div className={styles.icon}>
            <img src="/img/farms/attr.png" />
          </div>
          <div>
            <div className={styles.name}>ATTR</div>
            <div className={styles.description}>Attrace Protocol</div>
          </div>
        </div>
        <div className={styles.figure}>
          <div>
            <div className={styles.propname}>Estimated APR</div>
            <div className={styles.apr}>🔥%</div>
          </div>
          <div>
            <div className={styles.propname}>Daily Farm Rewards</div>
            <div className={styles.apr}>🤑 ATTR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
