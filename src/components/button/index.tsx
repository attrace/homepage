import React, { CSSProperties, FC, ReactNode, HTMLProps } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props extends HTMLProps<HTMLButtonElement> {
  variant?: "secondary" | "primary" | "tertiary";
  sizes?: "large" | "medium" | "small";
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Button: FC<Props> = ({
  children,
  className = "",
  variant,
  sizes,
  onClick,
  style,
  type,
  ...rest
}) => {
  const btnClass = clsx(styles.primary, {
    [styles.secondary]: variant === "secondary",
    [styles.tertiary]: variant === "tertiary",
    [styles.medium]: sizes === "medium",
    [styles.small]: sizes === "small",
  }, className);

  return (
    <button
      className={btnClass}
      onClick={onClick}
      style={style}
      type="button"
      {...rest}
    >
      <div>
        {children}
      </div>
    </button>
  );
};

export default Button;
