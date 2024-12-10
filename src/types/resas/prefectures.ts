import { ResasApiResponse } from "./index.ts";

/**
 * 都道府県一覧APIのレスポンス
 */
export type Prefectures = ResasApiResponse<Array<Prefecture>>;

//いち都道府県のデータ
export type Prefecture = {
  prefCode: number;
  prefName: string;
};
