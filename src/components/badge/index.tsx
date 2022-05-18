import React, { CSSProperties, FC, HTMLAttributes } from "react";

import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: "green" | "red";
  className?: string;
  style?: CSSProperties;
}

const Badge: FC<Props> = ({
  children,
  className = "",
  color,
  onClick,
  style,
  ...rest
}) => {
  return (
    <div className={styles.badge} style={style} {...rest}>
      <div className={styles.signal} />
      Live on Ethereum
    </div>
  );
};

export default Badge;
