import { ResasApiResponse } from "./index.ts";

/**
 * 人口構成APIのレスポンス
 */
export type PopulationCompositionResponse = ResasApiResponse<{
  boundaryYear: number; //実績値と推計値の区切り年
  data: Array<PopulationCompositionDataPerAspect>;
}>;

//観点（総人口、年少人口、生産年齢人口、老年人口）ごとのデータ
export type PopulationCompositionDataPerAspect = {
  label: string;
  data: Array<PopulationComposition>;
};

//ある年度のデータ
type PopulationComposition = {
  year: number; //年
  value: number; //人口
  rate?: number; //割合
};
