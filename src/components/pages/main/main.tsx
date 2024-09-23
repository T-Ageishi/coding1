"use client";

import { FC } from "react";
import { useDropdown } from "../../molecules/dropdown/dropdown.tsx";
import { useCheckboxes } from "../../molecules/checkboxes/checkboxes.tsx";
import { CheckboxProps } from "../../molecules/checkboxes/types.ts";
import { Setting } from "../../molecules/dropdown/types.ts";
import { MainTemplate } from "../../templates/main/main_template.tsx";
import { CHART_TYPE_TOTAL } from "../../../lib/resas/chart_const.ts";

/**
 * メインのページ
 */
export const Main: FC<{
  checkboxSetting: CheckboxProps[];
  dropdownSetting: Setting[];
}> = ({ checkboxSetting, dropdownSetting }) => {
  const { RenderCheckboxes } = useCheckboxes(checkboxSetting);
  const { RenderDropdown } = useDropdown(CHART_TYPE_TOTAL);

  return (
    <MainTemplate>
      <>
        <RenderDropdown settings={dropdownSetting} />
        <RenderCheckboxes />
      </>
    </MainTemplate>
  );
};
