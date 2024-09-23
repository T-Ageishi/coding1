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
  checkboxSetting: Props[];
  dropdownSetting: Setting[];
}> = ({ checkboxSetting, dropdownSetting }) => {
  const { RenderCheckboxes } = useCheckboxes(checkboxSetting);
  const { RenderDropdown } = useDropdown("0");

  return (
    <>
      <RenderDropdown settings={dropdownSetting} />
      <RenderCheckboxes />
    </>
  );
};
