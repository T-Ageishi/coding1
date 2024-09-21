import { LineProps, XAxisProps } from "recharts";

export type Props = {
  dataCollection: Array<ChartData>;
  xAxisProps: XAxisProps;
  linePropsCollection: Array<LineProps>;
};

export type ChartData = {
  year: number;
  [dataKey: number]: number;
};
