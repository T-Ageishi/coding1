import {
  fetchPrefectures,
  Prefectures,
} from "../lib/resas/fetch_prefectures.ts";
import { Main } from "../components/pages/main/main.tsx";
import { Setting } from "../components/molecules/dropdown/types.ts";

export default async function Page() {
  //都道府県一覧
  const rawPrefectures: Prefectures = await fetchPrefectures();
  const checkboxSetting = rawPrefectures.map((p) => ({
    label: p.prefName,
    value: String(p.prefCode),
  }));

  //グラフのタイプ
  const dropdownSetting: Setting[] = [
    { key: "0", "data-value": "0", label: "総人口推移" },
    { key: "1", "data-value": "1", label: "年少人口推移" },
    { key: "2", "data-value": "2", label: "生産年齢人口推移" },
    { key: "3", "data-value": "3", label: "老年人口推移" },
  ];

  return (
    <Main checkboxSetting={checkboxSetting} dropdownSetting={dropdownSetting} />
  );
}
