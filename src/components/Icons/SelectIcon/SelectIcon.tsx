import React, { FC } from "react";
import { HandySvg } from "handy-svg";
import selectIcon from "assets/selectIcon.svg";

type SelectIconType = {
  width?: number;
  height?: number;
  className?: string;
};

export const SelectIcon: FC<SelectIconType> = ({
  width = 12,
  height = 8,
  className,
}) => {
  return (
    <HandySvg
      src={selectIcon}
      width={width}
      height={height}
      className={className}
    />
  );
};
