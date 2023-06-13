import React, { FC } from "react";
import { HandySvg } from "handy-svg";
import garbage from "assets/garbage.svg";

type GarbageIconType = {
  width?: number;
  height?: number;
  className?: string;
};

export const GarbageIcon: FC<GarbageIconType> = ({
  width = 15,
  height = 15,
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
