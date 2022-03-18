import React, { FC } from "react";
import Link from "@docusaurus/Link";

import AttrFooterLogo from "@site/static/img/attrFooterLogo.svg";
import Discord from "@site/static/img/icons/discord.svg";
import Telegram from "@site/static/img/icons/telegram.svg";
import Twitter from "@site/static/img/icons/twitter.svg";
import Github from "@site/static/img/icons/github.svg";
import Medium from "@site/static/img/icons/medium.svg";
import Sushiswap from "@site/static/img/icons/sushiswap.svg";
import Uniswap from "@site/static/img/icons/uniswap.svg";

import styles from "./styles.module.css";

const Footer: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.upper}>
      <div className={styles.upperLeft}>
        <div className={styles.footerLogo}>
          <AttrFooterLogo className={styles.logo} />
          <div className={styles.logoText}>
            <h4>Attrace Referral Network</h4>
            <p>
              The world&#39;s first &#39;Word of Mouth&#39; protocol for web3
            </p>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://discord.com/invite/WSX2RufvbV" target="_blank">
            <Discord />
          </a>
          <a href="https://t.me/attrace" target="_blank">
            <Telegram />
          </a>
          <a href="https://twitter.com/attracenetwork" target="_blank">
            <Twitter />
          </a>
          <a href="https://github.com/attrace/" target="_blank">
            <Github />
          </a>
          <a href="https://attrace.medium.com/" target="_blank">
            <Medium />
          </a>
        </div>
      </div>
      <div className={styles.upperRight}>
        <div className={styles.links}>
          <h6>$ATTR available on</h6>
          <div className={styles.externalLink}>
            <Sushiswap />
            <a
              href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x44e2dec86b9f0e0266e9aa66e10323a2bd69cf9a"
              target="_blank"
            >
              Sushiswap
            </a>
          </div>
          <div className={styles.externalLink}>
            <Uniswap />
            <a
              href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x44e2dec86b9f0e0266e9aa66e10323a2bd69cf9a&chain=rinkeby"
              target="_blank"
            >
              Uniswap
            </a>
          </div>
          <div className={styles.externalLink}>
            <img src={require("@site/static/img/icons/bittrex.png").default} />
            <a
              href="https://global.bittrex.com/Market/Index?MarketName=USDT-ATTR"
              target="_blank"
            >
              Bittrex
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.lower}>
      <div className={styles.copylight}>
        &copy; 2022 - Attrace Referral Network
      </div>
      <div>
        <Link to="/about/legal/privacy-policy/" className={styles.privacya}>
          Privacy Policy
        </Link>
        <Link to="/about/legal/code-of-conduct/">Code of Conduct</Link>
      </div>
    </div>
  </div>
);

export default Footer;
