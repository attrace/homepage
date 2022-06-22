import React, { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";


interface Props {
  posiClass: string
  name: string
  description: string
  rewardToken: string
}

const Card: FC<Props> = (props) => {
  const { posiClass, name, description, rewardToken} = props
  return (
    <div className={clsx(styles.statsCard, posiClass)}>
      <div className={styles.info}>
        <div className={styles.icon}>
          {props.children}
        </div>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <div className={styles.figure}>
        <div>
          <div className={styles.propname}>Referral Rate</div>
          <div className={styles.apr}>🔥%</div>
        </div>
        <div>
          <div className={styles.propname}>Total Daily Rewards</div>
          <div className={styles.apr}>💰 {rewardToken}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;