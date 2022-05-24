import clsx from "clsx";
import React from "react";

import truncateString from "../../../utils/truncateString";

import Button from "../../button";

import ArrowDownIcon from "@site/static/img/icons/arrowDown.svg";
import External from "@site/static/img/icons/external.svg";
import styles from "./index.module.css";

interface Props {
  reff: any
}

const MainSection:React.FC<Props> = ({ reff }) => {
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
          <Button>Enter App</Button>
          <Button variant="secondary" onClick={() => reff.current.scrollIntoView({ behavior: 'smooth' })}>
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
          <video src='/media/video.webm' autoPlay muted loop />
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
          <a
            className={styles.etherscanlink}
            href={`https://etherscan.io/address/0x26bc596D39c5D45C855901b6995e0842E37Ae57a`}
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