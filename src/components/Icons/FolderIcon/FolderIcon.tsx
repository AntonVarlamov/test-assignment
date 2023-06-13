import React, { FC } from "react";
import { HandySvg } from "handy-svg";
import folder from "assets/folder.svg";


type FolderIconType = {
  width?: number;
  height?: number;
  className?: string;
};

export const FolderIcon: FC<FolderIconType> = ({
  width = 14,
  height = 12,
  className,
}) => {
  return (
    <HandySvg
      src={folder}
      width={width}
      height={height}
      className={className}
    />
  );
};
