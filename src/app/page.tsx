import {
  fetchPrefectures,
  Prefectures,
} from "../lib/resas/fetch_prefectures.ts";
import { Main } from "../components/pages/main/main.tsx";

export default async function Page() {
  //都道府県一覧
  const rawPrefectures: Prefectures = await fetchPrefectures();
  const prefectures = rawPrefectures.map((p) => ({
    label: p.prefName,
    value: String(p.prefCode),
  }));

  return <Main prefectures={prefectures} />;
}
