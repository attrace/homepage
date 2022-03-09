import React, { FC } from "react";
import clsx from "clsx";

import Header from "../header";
import Footer from "../footer";

import styles from "./styles.module.css";

const BasicLayout: FC = ({ children }) => (
  <div className={clsx("default-theme", "flex-column", styles.wrapper)}>
    <Header />
    <div className={styles.container}>{children}</div>
    {/* <Footer /> */}
  </div>
);

export default BasicLayout;
