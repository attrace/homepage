import React, { CSSProperties, FC, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "secondary" | "primary" | "borderless";
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
  ...rest
}) => {
  const btnClass = clsx(styles.primary, {
    [styles.secondary]: variant === "secondary",
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
