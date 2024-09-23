"use client";

import { FC } from "react";
import { useDropdown } from "../../molecules/dropdown/dropdown.tsx";
import { useCheckboxes } from "../../molecules/checkboxes/checkboxes.tsx";
import { Props } from "../../molecules/checkboxes/types.ts";
import { Setting } from "../../molecules/dropdown/types.ts";

/**
 * メインのページ
 */
export const Main: FC<{
  prefectures: Props[];
  populationCompositionTypes: Setting[];
}> = ({ prefectures, populationCompositionTypes }) => {
  const { RenderCheckboxes } = useCheckboxes(prefectures);
  const { RenderDropdown } = useDropdown("0");

  return (
    <>
      <RenderDropdown settings={populationCompositionTypes} />
      <RenderCheckboxes />
    </>
  );
};
