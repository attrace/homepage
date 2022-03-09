import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./index.module.css";

// require('@site/static/img/undraw_docusaurus_mountain.svg').default

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="‘Word of Mouth’ Protocol for Web3"
    >
      <main className={styles.wrapper}>
        <h1>Home page</h1>
      </main>
    </Layout>
  );
}
