import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import { BUTTON_TYPES } from "utils/consts/buttonConsts";
import { ValueOf } from "utils/types";

export type ButtonType = {
  size?: "m";
  styleType: ValueOf<typeof BUTTON_TYPES>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  children: ReactNode;
  className?: string;
  id?: string;
};

export const Button: FC<ButtonType> = ({
  size = "m",
  styleType,
  children,
  className,
  id,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, styles[size], styles[styleType], className)}
      id={id}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
