import React, { FC } from "react";
import { HandySvg } from "handy-svg";
import checkMark from "assets/checkMark.svg";

type CheckMarkIconType = {
  width?: number;
  height?: number;
  className?: string;
};

export const CheckMarkIcon: FC<CheckMarkIconType> = ({
  width = 10,
  height = 8,
  className,
}) => {
  return (
    <HandySvg
      src={checkMark}
      width={width}
      height={height}
      className={className}
    />
  );
};
