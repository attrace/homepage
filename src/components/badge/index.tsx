import React, { CSSProperties, FC, HTMLAttributes } from "react";
import clsx from "clsx";

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
  style,
  ...rest
}) => {
  return (
    <div className={clsx(styles.badge, {
      [styles.red]: color === "red",
      className,
    })} style={style} {...rest}>
      <div className={clsx(styles.signal, {
        [styles.signalRed]: color === "red",
        className,
      })} />
      Live on Ethereum
    </div>
  );
};

export default Badge;
