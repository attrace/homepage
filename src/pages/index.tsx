import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import MainSection from "../components/homePage/mainSection";
import TokensAPR from "../components/homePage/tokensAPR";

import MaskLogo from "@site/static/img/partners/mask.svg";
import DeribitLogo from "@site/static/img/partners/deribit.svg";
import ImpossibleFinLogo from "@site/static/img/partners/impossibleFinance.svg";
import ExternalLinkIcon from "@site/static/img/icons/externalLink.svg";
import Chart1Icon from "@site/static/img/icons/chart1.svg";
import Chart2Icon from "@site/static/img/icons/chart2.svg";
import Chart3Icon from "@site/static/img/icons/chart3.svg";
import ArrowRightIcon from "@site/static/img/icons/arrowRight.svg";
import styles from "./index.module.css";

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
            Join the Ecosystem with
            <span> Referral</span>
            <br />
            <span> Farming</span>
          </div>
          <div className={styles.cards}>
            <div className={styles.statsCard}>
              <div className={clsx(styles.filter, styles.filter1)} />
              <div className={styles.value}>12,034</div>
              <span className={styles.text}>
                Users who joined referral farming
              </span>
            </div>
            <div className={styles.statsCard}>
              <div className={clsx(styles.filter, styles.filter2)} />
              <div className={styles.value}>1,523</div>
              <span className={styles.text}>
                NFT & crypto projects eligible for farming rewards
              </span>
            </div>
            <div className={styles.statsCard}>
              <div className={clsx(styles.filter, styles.filter3)} />
              <div className={styles.value}>
                $3.2M
                <a href="#" target="_blank">
                  <ExternalLinkIcon />
                </a>
              </div>
              <span className={styles.text}>
                Total value locked in referral farms
              </span>
            </div>
            <div className={styles.statsCard}>
              <div className={clsx(styles.filter, styles.filter4)} />
              <div className={styles.value}>
                $2.5M
                <a href="#" target="_blank">
                  <ExternalLinkIcon />
                </a>
              </div>
              <span className={styles.text}>
                Total value of $ATTR in staked with Oracles
              </span>
            </div>
          </div>
        </div>
        <div className={clsx("container", styles.section, styles.earnSection)}>
          <h2 className={styles.sectionTitle}>
            Earn rewards with
            <span> Referral Protocol</span>
          </h2>
          <div className={styles.cards}>
            <div className={styles.rewardCard}>
              <div className={styles.filter} />
              <div
                className={styles.icon}
              >
                <Chart1Icon />
              </div>
              <div className={styles.title}>Referral Farming</div>
              <div className={styles.text}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </div>
              <a>
                Join Referral Farms <ArrowRightIcon />
              </a>
            </div>
            <div className={styles.rewardCard}>
              <div
                className={styles.icon}
              >
                <Chart2Icon />
              </div>
              <div className={styles.filter} />
              <div className={styles.title}>Oracle Staking</div>
              <div className={styles.text}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </div>
              <a>
                Stake $ATTR <ArrowRightIcon />
              </a>
            </div>
            <div className={clsx(styles.rewardCard, styles.rewardCard3)}>
              <div
                className={styles.icon}
              >
                <Chart3Icon />
              </div>
              <div className={styles.filter} />
              <div className={styles.title}>Liquidity Mining</div>
              <div className={styles.text}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </div>
              <a>
                Provide Liquidity <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
        <div
          className={clsx("container", styles.section, styles.partnersSection)}
        >
          <h2 className={styles.sectionTitle}>
            Partners who joined
            <span> Referral </span>
            <br />
            <span> Ecosystem</span>
          </h2>
          <div className={styles.partnersLogos}>
            <MaskLogo />
            <img
              src={require("@site/static/img/partners/dappradar.png").default}
            />
            <img src={require("@site/static/img/partners/amasa.png").default} />
            <DeribitLogo />
            <ImpossibleFinLogo />
            <img
              src={require("@site/static/img/partners/despace.png").default}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
