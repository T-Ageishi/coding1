import {
  fetchPrefectures,
  Prefectures,
} from "../lib/resas/fetch_prefectures.ts";
import { Main } from "../components/pages/main/main.tsx";
import { Setting } from "../components/molecules/dropdown/types.ts";

export default async function Page() {
  //都道府県一覧
  const rawPrefectures: Prefectures = await fetchPrefectures();
  const prefectures = rawPrefectures.map((p) => ({
    label: p.prefName,
    value: String(p.prefCode),
  }));

  //人口構成
  const populationCompositionTypes: Setting[] = [
    { key: "0", "data-value": "0", label: "総人口" },
    { key: "1", "data-value": "1", label: "年少人口" },
    { key: "2", "data-value": "2", label: "生産年齢人口" },
    { key: "3", "data-value": "3", label: "老年人口" },
  ];

  return (
    <Main
      prefectures={prefectures}
      populationCompositionTypes={populationCompositionTypes}
    />
  );
}
