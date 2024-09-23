import {
  CHART_TYPE_AGED,
  CHART_TYPE_CHILD,
  CHART_TYPE_PRODUCTION,
  CHART_TYPE_TOTAL,
} from "./chart_const.ts";

/**
 * グラフの種類一覧
 */
export const getChartTypes = (): { key: string; label: string }[] => {
  return [
    {
      key: CHART_TYPE_TOTAL,
      label: "総人口推移",
    },
    {
      key: CHART_TYPE_CHILD,
      label: "年少人口推移",
    },
    {
      key: CHART_TYPE_PRODUCTION,
      label: "生産年齢人口推移",
    },
    {
      key: CHART_TYPE_AGED,
      label: "老年人口推移",
    },
  ];
};
