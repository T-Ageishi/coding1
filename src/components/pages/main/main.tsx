"use client";

import { FC } from "react";
import { useCheckboxes } from "../../molecules/checkboxes/checkboxes.tsx";
import { Props } from "../../molecules/checkboxes/types.ts";

/**
 * メインのページ
 */
export const Main: FC<{ prefectures: Props[] }> = ({ prefectures }) => {
  const { RenderCheckboxes } = useCheckboxes(prefectures);

  return (
    <>
      <RenderCheckboxes />
    </>
  );
};
