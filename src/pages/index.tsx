import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Button from "../components/button";
import Badge from "../components/badge";
import MainSection from "../components/homePage/mainSection";
import TokensAPR from "../components/homePage/tokensAPR";

import MaskLogo from "@site/static/img/partners/mask.svg";
import DeribitLogo from "@site/static/img/partners/deribit.svg";
import ImpossibleFinLogo from "@site/static/img/partners/impossibleFinance.svg";
import Chart1Icon from "@site/static/img/icons/chart1.svg";
import Chart2Icon from "@site/static/img/icons/chart2.svg";
import Chart3Icon from "@site/static/img/icons/chart3.svg";
import VerifyIcon from "@site/static/img/verified.svg";
import ArrowRightIcon from "@site/static/img/icons/arrowRight.svg";
import styles from "./index.module.css";

///comment


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="‘Word of Mouth’ Protocol for Web3"
    >
      <main>
        <MainSection />
        <TokensAPR />
        <div className={clsx("container", styles.section)}>
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
              <div className={styles.actions}>
                <Button>
                  Referral Farming
                  <ArrowRightIcon />
                </Button>
                <Button variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className={styles.farmingRowRight}>
              <div className={styles.cards}>
                <div className={styles.filter} style={{ background: 'rgb(95, 210, 250, 0.1)', bottom: -57.75, left: -20 }} />
                <div className={styles.filter} style={{ background: 'rgb(254, 153, 164, 0.1)', top: -97.6, left: '50%', transform: 'translateX(-50%)' }} />
                <div className={styles.filter} style={{ background: 'rgb(195, 98, 254, 0.1)', bottom: -81.75, right: 20 }} />
                <div className={styles.statsCard}>
                  <div className={styles.info}>
                    <div className={styles.icon}>
                      <img src="/img/farms/radar.png" />
                    </div>
                    <div>
                      <div className={styles.name}>RADAR</div>
                      <div className={styles.description}>DappRadar</div>
                    </div>
                  </div>
                  <div className={styles.figure}>
                    <div>
                      <div className={styles.propname}>Estimated APR</div>
                      <div className={styles.apr}>🔥%</div>
                    </div>
                    <div>
                      <div className={styles.propname}>Daily Farm Rewards</div>
                      <div className={styles.apr}>🤑 wETH</div>
                    </div>
                  </div>
                </div>
                <div className={styles.statsCard} style={{ marginLeft: -12 }}>
                  <div className={styles.info}>
                    <div className={styles.icon}>
                      <img src="/img/farms/mask.png" />
                    </div>
                    <div>
                      <div className={styles.name}>Mask</div>
                      <div className={styles.description}>Mask Network</div>
                    </div>
                  </div>
                  <div className={styles.figure}>
                    <div>
                      <div className={styles.propname}>Estimated APR</div>
                      <div className={styles.apr}>🔥%</div>
                    </div>
                    <div>
                      <div className={styles.propname}>Daily Farm Rewards</div>
                      <div className={styles.apr}>🤑 MASK</div>
                    </div>
                  </div>
                </div>
                <div className={styles.statsCard} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '32px 36px', minWidth: 370, height: 210 }}>
                  <div className={styles.info}>
                    <div className={styles.icon}>
                      <img src="/img/farms/yacht.png" />
                      <VerifyIcon />
                    </div>
                    <div>
                      <div className={styles.name}>Bored Ape Yacht Club</div>
                    </div>
                  </div>
                  <div className={styles.figure}>
                    <div>
                      <div className={styles.propname}>Estimated APR</div>
                      <div className={styles.apr}>🔥%</div>
                    </div>
                    <div>
                      <div className={styles.propname}>Daily Farm Rewards</div>
                      <div className={styles.apr}>🤑 wETH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx("container", styles.earnSection)}>
          <div className={styles.sectionTitle}>
            <span>Stake </span>
            with Oracles
          </div>
          <div className={styles.farmingRow}>
            <div className={styles.oracleRowLeft}>
              <img src="/img/blankgraph.png" />
              <div className={styles.blast}>
                <div className={styles.title}>100M</div>
                <div className={styles.comment}>$ATTR staked</div>
              </div>
            </div>
            <div className={styles.oracleRowRight}>
              <Badge color='green' />
              <div className={styles.farmingText}>
                Oracles capture the value of ‘word of mouth’ marketing in web3 and power referral farming by detecting and distributing rewards in a trustless manner.<br /><br />
                The referral protocol is secured by the $ATTR token. Help securing the network by delegating your stake to the oracles and earn rewards!
              </div>
              <div className={styles.actions}>
                <Button>
                  Oracle Staking
                  <ArrowRightIcon />
                </Button>
                <Button variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx("container", styles.section, styles.earnSection)}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: 80 }}>
            <span>Earn rewards </span>
            with Attrace
          </h2>
          <div className={styles.cards}>
            <div className={styles.rewardCard}>
              <div className={styles.filter} style={{ background: 'rgba(218, 156, 255, .15)' }} />
              <div
                className={styles.icon}
              >
                <Chart1Icon />
              </div>
              <div className={styles.title}>Referral Farming</div>
              <div className={styles.text}>
                Share Attrace link when recommending any crypto or NFT project and earn farming rewards for every token bought via your link.
              </div>
              <a>
                Join Referral Farms <ArrowRightIcon fill='#C766FF' />
              </a>
            </div>
            <div className={styles.rewardCard}>
              <div
                className={styles.icon}
              >
                <Chart2Icon />
              </div>
              <div className={styles.filter} style={{ background: 'rgba(255, 153, 161, .1)' }} />
              <div className={styles.title}>Oracle Staking</div>
              <div className={styles.text}>
                Stake with the Oracles to secure the network and receive protocol and staking rewards in return.
              </div>
              <a>
                Stake $ATTR <ArrowRightIcon fill='#C766FF' />
              </a>
            </div>
            <div className={clsx(styles.rewardCard, styles.rewardCard3)}>
              <div
                className={styles.icon}
              >
                <Chart3Icon />
              </div>
              <div className={styles.filter} style={{ background: 'rgba(95, 210, 250, .08)' }} />
              <div className={styles.title}>Liquidity Mining</div>
              <div className={styles.text}>
                Provide liquidity to ATTR/ETH liquidity pool on SushiSwap and earn $ATTR rewards in return for enabling the token exchange.
              </div>
              <a>
                Provide Liquidity <ArrowRightIcon fill='#C766FF' />
              </a>
            </div>
          </div>
        </div>
        <div
          className={clsx("container", styles.section, styles.partnersSection)}
        >
          <h2 className={styles.sectionTitle} style={{ marginBottom: 80 }}>
            <span>Partners </span>
            Who Joined the Ecosystem
          </h2>
          <div className={styles.partnersLogos}>
            <div className={styles.filter} />
            <DeribitLogo />
            <ImpossibleFinLogo />
            <img
              src={require("@site/static/img/partners/dappradar.png").default}
            />
            <MaskLogo />
            <img src={require("@site/static/img/partners/amasa.png").default} />
            <img
              src={require("@site/static/img/partners/despace.png").default}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
