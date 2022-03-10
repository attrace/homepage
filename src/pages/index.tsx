import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import MainSection from "../components/homePage/mainSection";
import TokensAPR from "../components/homePage/tokensAPR";

import MaskLogo from "@site/static/img/partners/mask.svg";
import DappRadarLogo from "@site/static/img/partners/dappRadar.svg";
import DeribitLogo from "@site/static/img/partners/deribit.svg";
import ImpossibleFinLogo from "@site/static/img/partners/impossibleFinance.svg";
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
          <h2 className={styles.sectionTitle}>
            Join the Ecosystem with
            <span> Referral Farming</span>
          </h2>
        </div>
        <div className={clsx("container", styles.section, styles.earnSection)}>
          <h2 className={styles.sectionTitle}>
            Earn rewards with
            <span> Referral Protocol</span>
          </h2>
        </div>
        <div
          className={clsx("container", styles.section, styles.partnersSection)}
        >
          <h2 className={styles.sectionTitle}>
            Partners who joined
            <span> Referral Ecosystem</span>
          </h2>
          <div className={styles.partnersLogos}>
            <MaskLogo />
            <DappRadarLogo />
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
