"use client";

import React, { FC, useState, ChangeEvent, memo } from "react";
import { CheckList, CheckboxProps, PropsCollection } from "./types.ts";
import { Label } from "../../atoms/label/label.tsx";
import styles from "./styles.module.css";

/**
 * チェックボックス（Render hooks）
 */
export const useCheckboxes = (
  propsCollection: CheckboxProps[]
): { checkList: CheckList; RenderCheckboxes: FC } => {
  const initialState: CheckList = {};
  propsCollection.forEach((prop) => (initialState[prop.value] = false));

  const [checkList, setCheckList] = useState<CheckList>(initialState);

  //チェック状態を切り替える
  const handleCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckList({
      ...checkList,
      [e.currentTarget.value]: e.currentTarget.checked,
    });
  };

  const RenderCheckboxes = () => (
    <Checkboxes
      propsCollection={propsCollection}
      onChange={handleCheckChange}
      checkList={checkList}
    />
  );

  return { checkList, RenderCheckboxes };
};

/**
 * チェックボックスUI本体
 */
const Checkboxes: FC<PropsCollection> = memo(
  ({ propsCollection, checkList, onChange }) => {
    return (
      <ul className={styles["horizontal"]}>
        {propsCollection.map((props) => (
          <li key={props.value}>
            <Label>
              <span className={styles["checkboxContainer"]}>
                <input
                  type="checkbox"
                  className={styles["checkbox"]}
                  value={props.value}
                  checked={checkList[props.value]}
                  onChange={onChange}
                />
              </span>
              <span>{props.label}</span>
            </Label>
          </li>
        ))}
      </ul>
    );
  }
);
