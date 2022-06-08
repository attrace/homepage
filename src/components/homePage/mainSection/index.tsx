import clsx from "clsx";
import React from "react";

import truncateString from "../../../utils/truncateString";
import getAppUrl from "../../../utils/getAppUrl";

import Button from "../../button";

import ArrowDownIcon from "@site/static/img/icons/arrowDown.svg";
import External from "@site/static/img/icons/external.svg";
import styles from "./index.module.css";

interface Props {
  handleClick: () => void
}

const MainSection: React.FC<Props> = ({ handleClick }) => {

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
          <a href={getAppUrl()}>
            <Button>Enter App</Button>
          </a>
          <Button variant="secondary" onClick={handleClick}>
            Learn More
            <ArrowDownIcon />
          </Button>
        </div>
      </div>
      <div className={styles.referral}>
        <div className={clsx(styles.filter, styles.filter1)} />
        <div className={clsx(styles.filter, styles.filter2)} />
        <div className={clsx(styles.filter, styles.filter3)} />
        <div className={styles.img}>
          <video src='/media/video.mp4' autoPlay muted loop />
        </div>
        <div className={styles.bottom}>
          <div className={styles.data}>
            <div className={styles.name}>Proof of recommendation</div>
            <div className={styles.creator}>
              Created by{" "}
              <a
                href={`https://etherscan.io/token/0x8d2e527675094dc1bb9ef878b6566f3b17240fd8`}
                target="_blank"
              >
                {truncateString("0x8d2e527675094dc1bb9ef878b6566f3b17240fd8")}
              </a>
            </div>
          </div>
          <a
            className={styles.etherscanlink}
            href={`https://etherscan.io/token/0x8d2e527675094dc1bb9ef878b6566f3b17240fd8`}
            target="_blank"
          >
            <External />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainSection;