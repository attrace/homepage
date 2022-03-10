import React from "react";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function About(): JSX.Element {
  return (
    <Layout title="About" description="About">
      <main className={styles.wrapper}>
        <h1>About page</h1>
      </main>
    </Layout>
  );
}
