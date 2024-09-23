import {
  fetchPrefectures,
  Prefectures,
} from "../lib/resas/fetch_prefectures.ts";
import { Main } from "../components/pages/main/main.tsx";
import { Setting } from "../components/molecules/dropdown/types.ts";
import { getChartTypes } from "../lib/resas/get_chart_setting.ts";

export default async function Page() {
  //都道府県一覧
  const rawPrefectures: Prefectures = await fetchPrefectures();
  const checkboxSetting = rawPrefectures.map((p) => ({
    label: p.prefName,
    value: String(p.prefCode),
  }));

  //グラフのタイプ
  const dropdownSetting: Setting[] = getChartTypes().map((c) => ({
    ...c,
    "data-value": c.key,
  }));

  return (
    <Main checkboxSetting={checkboxSetting} dropdownSetting={dropdownSetting} />
  );
}
