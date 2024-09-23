import { readFile } from "node:fs/promises";

/**
 * 都道府県一覧データを取得する
 * @see https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 */
export const fetchPrefectures = async (): Promise<Prefectures> => {
  // TODO エラーハンドリング
  // const data = await fetch(
  //   "https://opendata.resas-portal.go.jp/api/v1/prefectures",
  //   {
  //     method: "GET",
  //     headers: [["X-API-KEY", process.env.RESAS_KEY ?? ""]],
  //   }
  // );
  // const json = await data.json();
  // return json.result;

  // TODO 開発用
  const data = JSON.parse(
    await readFile("./src/test/resas_mock_data/prefectures.json", "utf8")
  );
  return data.result;
};

export type Prefectures = Prefecture[];
type Prefecture = {
  prefCode: number;
  prefName: "string";
};
