import React, { CSSProperties, FC, ReactNode, HTMLProps } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props extends HTMLProps<HTMLButtonElement> {
  variant?: "secondary" | "primary" | "tertiary";
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Button: FC<Props> = ({
  children,
  className = "",
  variant,
  onClick,
  style,
  type,
  ...rest
}) => {
  const btnClass = clsx(styles.primary, {
    [styles.secondary]: variant === "secondary",
    [styles.tertiary]: variant === "tertiary",
    className,
  });

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
