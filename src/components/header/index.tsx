import React, { FC } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from "./styles.module.css";

interface IProps {
  mainMenuHidden?: boolean;
  logo?: string;
}

const Header: FC<IProps> = () => {
  return (
    <div
      className={clsx("flex-align-center flex-space-between", styles.wrapper)}
    >
      <img
        src={require("@site/static/img/logo.svg").default}
        alt="Attrace"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <Link to="/farms">Referral Farms</Link>
        <Link to="/">Promoters</Link>
        <Link to="/">Staking</Link>
        <Link to="/">Docs & Help</Link>
      </nav>
    </div>
  );
};

export default Header;
