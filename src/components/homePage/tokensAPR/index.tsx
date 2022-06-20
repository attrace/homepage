import React from "react";
import uuid from "react-uuid";
import Marquee from "react-fast-marquee";

import styles from "./index.module.css";

const MOCK_TOKEN_LIST = [
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
  {
    symbol: "MASK",
    apr: 0.5,
  },
  {
    symbol: "BAL",
    apr: 0.31,
  },
  {
    symbol: "UNI",
    apr: 0.24,
  },
  {
    symbol: "RADAR",
    apr: 0.12,
  },
  {
    symbol: "MANA",
    apr: 1.89,
  },
];
export default function TokensAPR({ reff }: any): JSX.Element {
  return (
    <div className={styles.wrapper} ref={reff}>
      <Marquee speed={45}>
        {MOCK_TOKEN_LIST.map((token) => (
          <div className={styles.item} key={uuid()}>
            ${token.symbol}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
