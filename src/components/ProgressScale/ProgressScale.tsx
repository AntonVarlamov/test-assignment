import React, { FC } from "react";
import styles from "./ProgressScale.module.css";
import cn from "classnames";
import { CheckMarkIcon } from "../Icons/CheckMarkIcon/CheckMarkIcon";
import { Spacer } from "../Spacer/Spacer";

type ProgressScaleType = {
  stagesLength: number;
  curStage: number;
};

export const ProgressScale: FC<ProgressScaleType> = ({
  stagesLength,
  curStage,
}) => {
  const percent = ((curStage - 1) * 100) / (stagesLength - 1) + "%";
  const stages = Array(stagesLength)
    .fill(0)
    .map((_, index) => (
      <div
        className={cn(styles.point, {
          [styles.curPoint]: index + 1 === curStage,
          [styles.nextPoint]: index + 1 > curStage,
          [styles.donePoint]: index + 1 < curStage,
        })}
        key={index}
      >
        {index + 1 < curStage && <CheckMarkIcon />}
      </div>
    ));
  const numbers = Array(stagesLength)
    .fill(0)
    .map((_, index) => <div key={index}>{index + 1}</div>);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          background: `linear-gradient(to right , #5558FA, #5558FA ${percent}, #ebebeb ${percent}, #ebebeb )`,
          marginTop: 4,
          height: 8,
          width: "100%",
          borderRadius: 8,
          position: "absolute",
        }}
      />
      <div className={styles.points}>{stages} </div>
      <Spacer height={12} />
      <div className={styles.points}>{numbers} </div>
    </div>
  );
};
