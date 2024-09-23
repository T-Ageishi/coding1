import { LineProps, XAxisProps } from "recharts";

export type LineChartProps = {
  dataCollection: Array<ChartData>;
  xAxisProps: XAxisProps;
  linePropsCollection: Array<LineProps>;
};

export type ChartData = {
  year: number;
  [dataKey: number]: number;
};
