import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Marquee from "react-fast-marquee";

import Button from "../components/button";
import Badge from "../components/badge";
import CardArray from "../components/homePage/cardArray";
import MainSection from "../components/homePage/mainSection";
import TokensAPR from "../components/homePage/tokensAPR";
import MobileMarquee from "../components/homePage/marquee";

import MaskLogo from "@site/static/img/partners/mask.svg";
import DeribitLogo from "@site/static/img/partners/deribit.svg";
import ImpossibleFinLogo from "@site/static/img/partners/impossibleFinance.svg";
import Chart1Icon from "@site/static/img/icons/chart1.svg";
import Chart2Icon from "@site/static/img/icons/chart2.svg";
import Chart3Icon from "@site/static/img/icons/chart3.svg";
import ArrowRightIcon from "@site/static/img/icons/arrowRight.svg";
import styles from "./index.module.css";
import Head from '@docusaurus/Head';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [playing, setPlaying] = useState(true);
  const [delta] = useState(2000);
  const referralRef = useRef(null);
  useEffect(() => {
    let index = 0
    let timer = setInterval(() => {
      index++
      if (index % 2 === 1) setPlaying(true)
      else setPlaying(false)
    }, delta)
    return () => clearInterval(timer)
  }, [])
  const handleLearnmore = useCallback(() => {
    referralRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [referralRef])
  return (
    <Layout>
      <Head>
        <title>Attrace | Referral Protocol for Web3</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Attrace | Referral Protocol for Web3" />
        <meta property="og:description" content="Unlock the value of ‘word of mouth’ marketing in Web3. Recommend crypto or NFT and earn rewards from referral farms." />
        <meta property="description" content="Unlock the value of ‘word of mouth’ marketing in Web3. Recommend crypto or NFT and earn rewards from referral farms." />
      </Head>
      <main className="main-overflow">
        <MainSection handleClick={handleLearnmore} />
        <TokensAPR reff={referralRef} />
        <div className={styles.cardsMobile}>
          <CardArray />
        </div>
        <div className={clsx("container", styles.section, styles.farmingSection)}>
          <div className={styles.sectionTitle}>
            Start
            <span> Referral Farming</span>
          </div>
          <div className={styles.farmingRow}>
            <div className={styles.farmingRowLeft}>
              <div className={styles.farmingText}>
                Referral farming incentivises referrals for the purchase of crypto tokens or NFTs by rewarding both promoter and buyer.<br /><br />
                Use Attrace link when recommending any crypto or NFT project and earn farming rewards!
              </div>
              <div className={clsx(styles.actions, styles.actionsWrapper)}>
                <Button>
                  Referral Farming
                  <ArrowRightIcon />
                </Button>
                <a href="/about/category/referral-farming" >
                  <Button variant="secondary">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className={styles.farmingRowRight}>
              <CardArray />
            </div>
          </div>
        </div>
        <div className={clsx("container", styles.earnSection)}>
          <div className={styles.graphBoxMobile}>
            <img src="/img/oracle_homepage.png" width='100%' />
            <div className={styles.blast}>
              <div className={styles.title}>100M</div>
              <div className={styles.comment}>$ATTR staked</div>
            </div>
          </div>
          <div className={styles.sectionTitle}>
            <span>Stake </span>
            with Oracles
          </div>
          <div className={styles.farmingRow}>
            <div className={styles.oracleRowLeft}>
              <img src="/img/oracle_homepage.png" width='622px'  />
              <div className={styles.blast}>
                <div className={styles.title}>100M</div>
                <div className={styles.comment}>$ATTR staked</div>
              </div>
            </div>
            <div className={styles.oracleRowRight}>
              <Badge />
              <div className={styles.farmingText}>
                Oracles capture the value of ‘word of mouth’ marketing in web3 and power referral farming by detecting and distributing rewards in a trustless manner.<br /><br />
                The referral protocol is secured by the $ATTR token. Help securing the network by delegating your stake to the oracles and earn rewards!
              </div>
              <div className={clsx(styles.actions, styles.actionsWrapper)}>
                <Button>
                  Oracle Staking
                  <ArrowRightIcon />
                </Button>
                <a href="/about/category/oracles" >
                  <Button variant="secondary">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx("container", styles.section, styles.earnSection)}>
          <h2 className={clsx(styles.sectionTitle, styles.bigTitle)}>
            <span>Earn rewards </span>
            with Attrace
          </h2>
          <div className={styles.rewardCards}>
            <div className={styles.rewardCard}>
              <div className={clsx(styles.filter, styles.filterColor1)} />
              <div className={styles.icon}>
                <Chart1Icon />
              </div>
              <div className={styles.title}>Referral Farming</div>
              <div className={styles.text}>
                Share Attrace link when recommending any crypto or NFT project and earn farming rewards for every token bought via your link.
              </div>
              <a>
                Join Referral Farms <ArrowRightIcon className={styles.purpleIcon} />
              </a>
            </div>
            <div className={styles.rewardCard}>
              <div className={styles.icon}>
                <Chart2Icon />
              </div>
              <div className={clsx(styles.filter, styles.filterColor2)} />
              <div className={styles.title}>Oracle Staking</div>
              <div className={styles.text}>
                Stake with the Oracles to secure the network and receive protocol and staking rewards in return.
              </div>
              <a>
                Stake $ATTR <ArrowRightIcon className={styles.purpleIcon} />
              </a>
            </div>
            <div className={clsx(styles.rewardCard, styles.rewardCard3)}>
              <div className={styles.icon}>
                <Chart3Icon />
              </div>
              <div className={clsx(styles.filter, styles.filterColor3)} />
              <div className={styles.title}>Liquidity Mining</div>
              <div className={styles.text}>
                Provide liquidity to ATTR/ETH liquidity pool on SushiSwap and earn $ATTR rewards in return for enabling the token exchange.
              </div>
              <a href='https://app.sushi.com/farm?chainId=1' target='_blank'>
                Provide Liquidity <ArrowRightIcon className={styles.purpleIcon} />
              </a>
            </div>
          </div>
        </div>
        <div
          className={clsx("container", styles.section, styles.partnersSection)}
        >
          <h2 className={clsx(styles.sectionTitle, styles.bigTitle)}>
            <span>Partners </span>
            Who Joined the Ecosystem
          </h2>
          <div className={styles.partnersLogos}>
            <div className={styles.filter} />
            <div className={styles.marqueeContainer}>
              <Marquee speed={100} play={playing}>
                <DeribitLogo />
                <ImpossibleFinLogo />
                <img
                  src={require("@site/static/img/partners/dappradar2x.png").default} style={{ width: "222px" }}
                />
                <MaskLogo />
                <img src={require("@site/static/img/partners/amasa2x.png").default} style={{ width: "101px" }}
                />
                <img
                  src={require("@site/static/img/partners/despace2x.png").default} style={{ width: "107px" }}
                />
              </Marquee>
            </div>
            <MobileMarquee />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;