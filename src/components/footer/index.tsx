import React, { FC } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import attrFooterLogo from "../../assets/images/attrFooterLogo.svg";
import discord from "../../assets/icons/discord.svg";
import telegram from "../../assets/icons/telegram.svg";
import twitter from "../../assets/icons/twitter.svg";
import github from "../../assets/icons/github.svg";
import medium from "../../assets/icons/medium.svg";
import sushiswap from "../../assets/icons/sushiswap.svg";
import uniswap from "../../assets/icons/uniswap.svg";
import bittrex from "../../assets/icons/bittrex.svg";
import styles from "./styles.module.css";

const Footer: FC = () => (
  <div className={styles.wrapper}>
    <div className={clsx(styles.upper)}>
      <div className={styles.upperLeft}>
        <div className={clsx("flex-align-center", styles.footerLogo)}>
          <img
            src={require("@site/static/img/attrFooterLogo.svg").default}
            alt="Attrace"
            className={styles.logo}
          />
          <div className={styles.logoText}>
            <h4>Attrace Referral Network</h4>
            <p>
              The world&#39;s first &#39;Word of Mouth&#39; protocol for web3
            </p>
          </div>
        </div>
        <div className={clsx("flex-align-center", styles.socialIcons)}>
          <a href="/#" target="_blank">
            <img src={discord} alt="Discord" />
          </a>
          <a href="/#" target="_blank">
            <img src={telegram} alt="Telegram" />
          </a>
          <a href="/#" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/#" target="_blank">
            <img src={github} alt="github" />
          </a>
          <a href="/#" target="_blank">
            <img src={medium} alt="medium" />
          </a>
        </div>
      </div>
      <div className={styles.upperRight}>
        <div className={clsx("flex-column", styles.links)}>
          <h6>$ATTR available on</h6>
          <div className={styles.externalLink}>
            <img src={sushiswap} alt="Sushiswap" />
            <a href="/#" target="_blank">
              SushiSwap
            </a>
          </div>
          <div className={styles.externalLink}>
            <img src={uniswap} alt="Uniswap" />
            <a href="/#" target="_blank">
              Uniswap
            </a>
          </div>
          <div className={styles.externalLink}>
            <img src={bittrex} alt="Bittrex" />
            <a href="/#" target="_blank">
              Bittrex
            </a>
          </div>
        </div>
        <div className={clsx("flex-column", styles.links)}>
          <h6>project</h6>
          <div className={styles.link}>
            <Link to="/#">Referral Network</Link>
          </div>
          <div className={styles.link}>
            <Link to="/#">ATTR Token</Link>
          </div>
          <div className={styles.link}>
            <Link to="/#">Developers</Link>
          </div>
        </div>
        <div className={clsx("flex-column", styles.links)}>
          <h6>About</h6>
          <div className={styles.link}>
            <Link to="/#">Blog</Link>
          </div>
          <div className={styles.link}>
            <Link to="/#">Team</Link>
          </div>
          <div className={styles.link}>
            <Link to="/#">Governance</Link>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.lower}>
      <div className={styles.copylight}>
        &copy; 2022 - Attrace Referral Network
      </div>
      <div>
        <Link to="/#" className={styles.privacyLink}>
          Privacy Policy
        </Link>
        <Link to="/#">Code of Conduct</Link>
      </div>
    </div>
  </div>
);

export default Footer;
