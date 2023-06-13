import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  memo,
} from "react";
import MaskedInput, { Mask } from "react-text-mask";
import cn from "classnames";
import { ValueOf } from "utils/types";
import { INPUT_TYPES } from "utils/consts/inputConsts";
import styles from "./Input.module.css";

export type InputType = {
  id?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  styleType: ValueOf<typeof INPUT_TYPES>;
  disabled?: boolean;
  size?: "m";
  mask?: Mask;
  className?: string;
  tip?: string;
  value: string;
  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
  onBlur?: InputHTMLAttributes<HTMLInputElement>["onBlur"];
  onClick?: InputHTMLAttributes<HTMLInputElement>["onClick"];
  maxLength?: InputHTMLAttributes<HTMLInputElement>["maxLength"];
  placeholder: string;
  name: string;
};

export const Input = memo<InputType>(
  ({ label, className, tip, styleType, size = "m", ...props }) => {
    const input =
      props.mask === undefined ? (
        <input
          className={cn(
            styles.input,
            styles[styleType],
            styles[size],
            className
          )}
          {...props}
        />
      ) : (
        <MaskedInput
          className={cn(
            styles.input,
            styles[styleType],
            styles[size],
            className
          )}
          mask={props.mask}
          {...props}
        />
      );

    return (
      <div className={styles.flex}>
        {!!label && (
          <label htmlFor={props.name}>
            <p>{label}</p>
          </label>
        )}
        {input}
      </div>
    );
  }
);
