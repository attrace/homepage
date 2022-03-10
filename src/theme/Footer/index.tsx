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
          <a href="/#" target="_blank">
            <Discord />
          </a>
          <a href="/#" target="_blank">
            <Telegram />
          </a>
          <a href="/#" target="_blank">
            <Twitter />
          </a>
          <a href="/#" target="_blank">
            <Github />
          </a>
          <a href="/#" target="_blank">
            <Medium />
          </a>
        </div>
      </div>
      <div className={styles.upperRight}>
        <div className={styles.links}>
          <h6>$ATTR available on</h6>
          <div className={styles.externalLink}>
            <Sushiswap />
            <a href="/#" target="_blank">
              Sushiswap
            </a>
          </div>
          <div className={styles.externalLink}>
            <Uniswap />
            <a href="/#" target="_blank">
              Uniswap
            </a>
          </div>
          <div className={styles.externalLink}>
            <img src={require("@site/static/img/icons/bittrex.png").default} />
            <a href="/#" target="_blank">
              Bittrex
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <h6>project</h6>
          <div className={styles.link}>
            <a href="/#" target="_blank">
              Referral Network
            </a>
          </div>
          <div className={styles.link}>
            <a href="#">ATTR Token</a>
          </div>
          <div className={styles.link}>
            <a href="#">Developers</a>
          </div>
        </div>
        <div className={styles.links}>
          <h6>About</h6>
          <div className={styles.link}>
            <Link to="/blog">Blog</Link>
          </div>
          <div className={styles.link}>
            <a href="#">Team</a>
          </div>
          <div className={styles.link}>
            <a href="#">Governance</a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.lower}>
      <div className={styles.copylight}>
        &copy; 2022 - Attrace Referral Network
      </div>
      <div>
        <a href="#" className={styles.privacya}>
          Privacy Policy
        </a>
        <a href="#">Code of Conduct</a>
      </div>
    </div>
  </div>
);

export default Footer;
