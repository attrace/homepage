import clsx from "clsx";
import React from "react";

import truncateString from "../../../utils/truncateString";

import Button from "../../button";

import ArrowDown from "@site/static/img/icons/arrowDown.svg";
import External from "@site/static/img/icons/external.svg";
import styles from "./index.module.css";

export default function MainSection(): JSX.Element {
  return (
    <div className={clsx("container", styles.wrapper)}>
      <div className={styles.actionBlock}>
        <h1>
          <span>Referral Protocol</span><br />
          for Web3 Assets
        </h1>
        <p>
          Unlock the value of ‘word of mouth’ marketing in web3. Recommend
          crypto or NFT and earn rewards from referral farms.{" "}
        </p>
        <div className={styles.actions}>
          <a href="#" target="_blank">
            <Button>Enter App</Button>
          </a>
          <a href="#" target="_blank">
            <Button variant="secondary">
              Learn More
              <ArrowDown />
            </Button>
          </a>
        </div>
      </div>
      <div className={styles.referral}>
        <div className={clsx(styles.filter, styles.filter1)} />
        <div className={clsx(styles.filter, styles.filter2)} />
        <div className={clsx(styles.filter, styles.filter3)} />
        <div className={styles.img}>
          <img src="/img/attrace-nft.jpg"></img>
        </div>
        <div className={styles.bottom}>
          <div className={styles.data}>
            <div className={styles.name}>Proof of recommendation</div>
            <div className={styles.creator}>
              Created by{" "}
              <a
                href={`https://etherscan.io/address/0x26bc596D39c5D45C855901b6995e0842E37Ae57a`}
                target="_blank"
              >
                {truncateString("0x26bc596D39c5D45C855901b6995e0842E37Ae57a")}
              </a>
            </div>
          </div>
          <External />
        </div>
      </div>
    </div>
  );
}
