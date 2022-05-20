import React, { CSSProperties, FC, HTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
}

const Badge: FC<Props> = ({
  children,
  className = "",
  style,
  ...rest
}) => {
  return (
    <div className={clsx(styles.badge)} style={style} {...rest}>
      <div className={clsx(styles.signal)} />
      Live on Ethereum
    </div>
  );
};

export default Badge;
