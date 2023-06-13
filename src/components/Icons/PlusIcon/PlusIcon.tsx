import React, { FC } from "react";
import { HandySvg } from "handy-svg";
import garbage from "assets/plus.svg";

type PlusIconType = {
  width?: number;
  height?: number;
  className?: string;
};

export const PlusIcon: FC<PlusIconType> = ({
  width = 12,
  height = 12,
  className,
}) => {
  return (
    <HandySvg
      src={garbage}
      width={width}
      height={height}
      className={className}
    />
  );
};
