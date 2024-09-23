"use client";

import { FC } from "react";
import { useDropdown } from "../../molecules/dropdown/dropdown.tsx";
import { useCheckboxes } from "../../molecules/checkboxes/checkboxes.tsx";
import { CheckboxProps } from "../../molecules/checkboxes/types.ts";
import { Setting } from "../../molecules/dropdown/types.ts";
import { MainTemplate } from "../../templates/main/main_template.tsx";

/**
 * メインのページ
 */
export const Main: FC<{
  checkboxSetting: CheckboxProps[];
  dropdownSetting: Setting[];
}> = ({ checkboxSetting, dropdownSetting }) => {
  const { RenderCheckboxes } = useCheckboxes(checkboxSetting);
  const { RenderDropdown } = useDropdown("0");

  return (
    <MainTemplate>
      <>
        <RenderDropdown settings={dropdownSetting} />
        <RenderCheckboxes />
      </>
    </MainTemplate>
  );
};
