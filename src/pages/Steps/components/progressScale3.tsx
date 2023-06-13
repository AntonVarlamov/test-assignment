import React, { FC } from "react";
import { ProgressScale } from "../../../components/ProgressScale/ProgressScale";

export const ProgressScale3: FC<Record<"step", number>> = ({ step }) => {
  return <ProgressScale stagesLength={3} curStage={step} />;
};

