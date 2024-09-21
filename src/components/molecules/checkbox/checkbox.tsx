import { FC } from "react";
import { Props } from "./types.ts";
import { Label } from "../../atoms/label/label.tsx";
import styles from "./styles.module.css";

/**
 * チェックボックス
 */
export const Checkbox: FC<Props> = ({ id, name, label, value }) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        className={styles["checkbox"]}
        value={value}
      />
      <Label htmlFor={id}>{label}</Label>
    </>
  );
};
