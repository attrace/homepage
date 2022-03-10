import clsx from "clsx";
import React from "react";

import truncateString from "../../../utils/truncateString";

import styles from "./index.module.css";

export default function MainSection(): JSX.Element {
  return (
    <div className={clsx("container", styles.wrapper)}>
      <div className={styles.actionBlock}>
        <h1>
          <span>Referral Protocol</span> for Web3
        </h1>
        <p>
          Unlock the value of ‘word of mouth’ marketing in web3. Recommend
          crypto or NFT and earn rewards from referral farms.{" "}
        </p>
      </div>
      <div className={styles.referral}>
        <div className={clsx(styles.filter, styles.filter1)} />
        <div className={clsx(styles.filter, styles.filter2)} />
        <div className={clsx(styles.filter, styles.filter3)} />
        <div className={styles.img}></div>
        <div className={styles.data}>
          <div className={styles.name}>Referral Genesis</div>
          <div>
            Created by{" "}
            <a
              href={`https://etherscan.io/address/0x26bc596D39c5D45C855901b6995e0842E37Ae57a`}
              target="_blank"
            >
              {truncateString("0x26bc596D39c5D45C855901b6995e0842E37Ae57a")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
