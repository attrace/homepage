import React, { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props {
  posiClass: string
  name: string
  description: string
  src: string
}

const Card: FC<Props> = (props) => {
  const { posiClass, name, description, src } = props
  return (
    <div className={clsx(styles.statsCard, posiClass)}>
      <div className={styles.info}>
        <div className={styles.icon}>
          <img src={src} />
        </div>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
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
  );
};

export default Card;