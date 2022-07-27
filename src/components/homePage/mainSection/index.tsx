import clsx from "clsx";
import React from "react";

import truncateString from "../../../utils/truncateString";
import getAppUrl from "../../../utils/getAppUrl";

import Button from "../../button";

import styles from "./index.module.css";

interface Props {
  handleWatchVideoClick: () => void;
}

const MainSection: React.FC<Props> = ({ handleWatchVideoClick }) => {

  return (
    <div className={clsx("container", styles.wrapper)}>
      <div className={styles.actionBlock}>
        <h1>
          <span>Referral Protocol</span><br />
          for Web3
        </h1>
        <div>
          <p>Unlock the value of ‘word of mouth’ in web3.</p>
          <p>Referrals live for tokens on Uniswap and Sushiswap.</p>
        </div>
        <div className={clsx(styles.actions, styles.actionsWrapper)}>
          <a href={getAppUrl()} target="_blank">
            <Button>Start Referring</Button>
          </a>
          <a href={getAppUrl('/my-farms?createFarm=true')} target="_blank">
            <Button variant="secondary">Set up Referral</Button>
          </a>
          {/* <Button variant="secondary" onClick={handleWatchVideoClick}>
            <img src='/img/icons/play.svg' alt='play'/>
            Watch video
          </Button> */}
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
                {truncateString("0x8d2e527675094dc1bb9ef878b6566f3b17240fd8")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;