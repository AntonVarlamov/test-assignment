import React, { FC } from "react";

type SpacerType = {
  height: number;
};

export const Spacer: FC<SpacerType> = ({ height }) => {
  return (
    <div
      style={{ height: height }}
    />
  );
};
