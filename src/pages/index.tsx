import React, { useCallback, useRef, useState } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Button from "../components/button";
import Badge from "../components/badge";
import CardArray from "../components/homePage/cardArray";
import MainSection from "../components/homePage/mainSection";
import TokensAPR from "../components/homePage/tokensAPR";

import Head from '@docusaurus/Head';
import VideoPopup from "@site/src/components/videoPopup";
import {PartnersSection} from "@site/src/components/homePage/partnersSection";

import ReferIcon from "@site/static/img/icons/referIcon.svg";
import StakeIcon from "@site/static/img/icons/stakeIcon.svg";
import LiquidityIcon from "@site/static/img/icons/liquidityIcon.svg";
import ArrowRightIcon from "@site/static/img/icons/arrowRight.svg";

import getAppUrl from "../utils/getAppUrl";

import styles from "./index.module.css";

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const referralRef = useRef(null);

  const handleLearnmore = useCallback(() => {
    referralRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [referralRef])

  const handleWatchClick = () => setShowVideoPopup(true);
  const handleCloseClick = () => setShowVideoPopup(false);

  return (
    <Layout>
      <Head>
        <title>Attrace | Referral Protocol for Web3</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Attrace | Referral Protocol for Web3" />
        <meta property="og:description" content="Unlock the value of ‘word of mouth’ in web3. Recommend crypto or NFT and earn rewards from referral farms." />
        <meta property="description" content="Unlock the value of ‘word of mouth’ in web3. Recommend crypto or NFT and earn rewards from referral farms." />
      </Head>
      {showVideoPopup && <VideoPopup handleClose={handleCloseClick} /> }
      <main className="main-overflow">
        <MainSection handleClick={handleLearnmore} />
        <TokensAPR reff={referralRef} />
        <div className={styles.cardsMobile}>
          <CardArray handleWatchClick={handleWatchClick}/>
        </div>

        <div className={clsx("container", styles.section, styles.farmingSection)}>
          <div className={styles.sectionTitle}>
            Join
            <span> Referral Farming</span>
          </div>
          <div className={styles.farmingRow}>
            <div className={styles.farmingRowLeft}>
              <div className={styles.farmingText}>
                <p>Use referral links when recommending crypto or NFT projects and earn referral farming rewards!</p>
                <div className={styles.whyJoinList}>
                  <p>Why join referral farming?</p>
                  <ul>
                    <li>
                      <img src='/img/icons/editBlackPoint.svg' alt="list-icon" />
                      Earn rewards when people buy tokens
                    </li>
                    <li>
                      <img src='/img/icons/generalLink.svg' alt="list-icon" />
                      Earn based on real on-chain value added
                    </li>
                    <li>
                      <img src='/img/icons/alarm.svg' alt="list-icon" />
                      Earn higher referral rate when joining a farm early
                    </li>
                  </ul>
                </div>
              </div>
              <div className={clsx(styles.actions, styles.actionsWrapper)}>
                <a href={getAppUrl('/farms')} target="_blank">
                  <Button>
                    Start Referring
                    <ArrowRightIcon />
                  </Button>
                </a>
                <a href="/guides/referral-farming/how-it-works" target="_blank">
                  <Button variant="secondary">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className={styles.farmingRowRight}>
              <CardArray handleWatchClick={handleWatchClick} />
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
            $ATTR with Oracles
          </div>
          <div className={styles.farmingRow}>
            <div className={styles.oracleRowLeft}>
              <img src="/img/oracle_homepage.png" width='622px' />
            </div>
            <div className={styles.oracleRowRight}>
              <Badge />
              <div className={styles.farmingText}>
                Oracles capture the value of ‘word of mouth’ marketing in web3 by connecting referral links with real on-chain activity, and distribute rewards in a trustless manner via referral farming.<br /><br />
                The referral protocol is secured by the $ATTR token. Help securing the protocol by staking with the Oracles and earn rewards!
              </div>
              <div className={clsx(styles.actions, styles.actionsWrapper)}>
                <a href={getAppUrl('/staking')} target="_blank">
                  <Button>
                    Stake $ATTR
                    <ArrowRightIcon />
                  </Button>
                </a>
                <a href="/guides/attr-staking" target="_blank">
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
                <ReferIcon />
              </div>
              <div className={styles.title}>Refer to Earn</div>
              <div className={styles.text}>
                Share your referral link when recommending any crypto or NFT project and earn farming rewards for every token bought via your link.
              </div>
              <a href={getAppUrl('/farms')} target="_blank">
                Start Referring <ArrowRightIcon className={styles.purpleIcon} />
              </a>
            </div>
            <div className={styles.rewardCard}>
              <div className={styles.icon}>
                <StakeIcon />
              </div>
              <div className={clsx(styles.filter, styles.filterColor2)} />
              <div className={styles.title}>Stake $ATTR</div>
              <div className={styles.text}>
                Stake with the Oracles to secure the network and receive protocol and staking rewards in return.
              </div>
              <a href={getAppUrl('/staking')} target="_blank">
                Stake $ATTR <ArrowRightIcon className={styles.purpleIcon} />
              </a>
            </div>
            <div className={clsx(styles.rewardCard, styles.rewardCard3)}>
              <div className={styles.icon}>
                <LiquidityIcon />
              </div>
              <div className={clsx(styles.filter, styles.filterColor3)} />
              <div className={styles.title}>Add $ATTR Liquidity</div>
              <div className={styles.text}>
                Provide liquidity to ATTR/ETH liquidity pool on SushiSwap and earn $ATTR rewards in return for enabling the token exchange.
              </div>
              <a href='/guides/attr-liquidity-provisioning' target="_blank">
                Provide Liquidity <ArrowRightIcon className={styles.purpleIcon} />
              </a>
            </div>
          </div>
        </div>

        <PartnersSection />

        <div className={clsx("container", styles.section, styles.referralFarmSection)}>
          <div className={styles.referralFarmSectionContent}>
          <div className={styles.backdropShadow}>
            <div></div>
            <div></div>
            <div></div>
          </div>
            <h2 className={clsx(styles.sectionTitle, styles.bigTitle)}>
              <span>Want to promote your token via referrals? </span>
            </h2>

            <div className={styles.text}>
              Reward promoters based on the real on-chain value added to your token via referrals.
            </div>

            <Button onClick={() => window.location.href = `${getAppUrl()}/farms?createFarm=true`} >
              Create Referral Farm
              <img src="/img/icons/arrowRight.svg"  alt='arrow-right'/>
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;