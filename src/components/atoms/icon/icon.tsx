import { FC } from "react";
import { Props } from "./types.ts";
import styles from "./styles.module.css";

/**
 * アイコン
 */
export const Icon: FC<Props> = ({ icon, className }) => {
  return (
    <span
      className={`material-symbols-outlined ${styles["material-symbols-outlined"]} ${className ? className : ""}`}
    >
      {icon}
    </span>
  );
};
