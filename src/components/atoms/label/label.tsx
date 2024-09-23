import { FC } from "react";
import { LabelProps } from "./types.ts";
import styles from "./styles.module.css";

/**
 * label要素
 */
export const Label: FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label className={styles["style"]} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
