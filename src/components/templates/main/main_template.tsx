import React, { FC } from "react";
import styles from "./styles.module.css";

/**
 * テンプレート
 */
export const MainTemplate: FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  return <div className={styles["container"]}>{children}</div>;
};
