import React, { FC, useState } from "react";
import { Input, InputType } from "../Input/Input";
import { SelectIcon } from "../Icons/SelectIcon/SelectIcon";
import styles from "./Select.module.css";
import cn from "classnames";
import { useKeyPress } from "../../hooks/useKeyPress";

type SelectType = InputType & {
  selectValues: string[];
  setSelectValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<unknown>;
};

export const Select: FC<SelectType> = ({
  selectValues,
  setSelectValue,
  ...inputProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const values = selectValues.map((value, index) => (
    <li
      key={index}
      id={`field-sex-option-${value}`}
      className={cn(styles.point, {
        [styles.chosenPoint]: value === inputProps.value,
      })}
      onClick={() => {
        setSelectValue(inputProps.name, value);
      }}
    >
      {value}
    </li>
  ));

  useKeyPress(() => {
    setIsOpen(false);
  }, ["Escape"]);
  return (
    <div
      className={styles.select}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Input {...inputProps} disabled />
      <SelectIcon
        className={cn(styles.selectIcon, { [styles.active]: isOpen })}
      />
      {isOpen && <ul className={styles.points}>{values}</ul>}
    </div>
  );
};
