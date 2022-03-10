import React from "react";
import uuid from "react-uuid";

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
    symbol: "MANA",
    apr: 0.24,
  },
  {
    symbol: "1INCH",
    apr: 0.12,
  },
  {
    symbol: "UNI",
    apr: 1.89,
  },
  {
    symbol: "ETH",
    apr: 0.11,
  },
  {
    symbol: "SUSHI",
    apr: 0.43,
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
    symbol: "MANA",
    apr: 0.24,
  },
  {
    symbol: "1INCH",
    apr: 0.12,
  },
  {
    symbol: "UNI",
    apr: 1.89,
  },
  {
    symbol: "ETH",
    apr: 0.11,
  },
  {
    symbol: "SUSHI",
    apr: 0.43,
  },
];
export default function TokensAPR(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      {MOCK_TOKEN_LIST.map((token) => (
        <div className={styles.item} key={uuid()}>
          ${token.symbol}: <span>{Number(token.apr * 100).toFixed()}% APR</span>
        </div>
      ))}
    </div>
  );
}
