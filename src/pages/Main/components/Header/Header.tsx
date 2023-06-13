import React, { FC } from "react";
import styles from "./Header.module.css";
import { FolderIcon } from "../../../../components/Icons/FolderIcon/FolderIcon";

type HeaderType = {
  name: string;
  sername: string;
  links: Record<string, string>;
};

export const Header: FC<HeaderType> = ({ name, sername, links }) => {
  const initials =
    (name[0] || "").toUpperCase() + (sername[0] || "").toUpperCase();
  const linksValue = Object.entries(links).map(([key, value], index) => (
    <div key={index} className={styles.link}>
      <FolderIcon />
      <a href={value} target="_blank" rel="noreferrer">{key}</a>
    </div>
  ));
  return (
    <div className={styles.header}>
      <div className={styles.initials}>
        <p className={styles.initialsText}>{initials}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.namesText}>{`${name} ${sername}`}</p>
        <div className={styles.links}>{linksValue}</div>
      </div>
    </div>
  );
};
