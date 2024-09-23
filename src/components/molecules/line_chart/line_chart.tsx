import { FC } from "react";
import * as Recharts from "recharts";
import { LineChartProps } from "./types.ts";

/**
 * 折れ線グラフ
 */
export const LineChart: FC<LineChartProps> = ({
  dataCollection,
  xAxisProps,
  linePropsCollection,
}) => {
  return (
    <Recharts.ResponsiveContainer>
      <Recharts.LineChart data={dataCollection}>
        <Recharts.CartesianGrid />
        <Recharts.XAxis {...xAxisProps} />
        <Recharts.YAxis />
        <Recharts.Tooltip />
        <Recharts.Legend />
        {linePropsCollection.map((c) => (
          <Recharts.Line dataKey={c.dataKey} name={c.name} />
        ))}
      </Recharts.LineChart>
    </Recharts.ResponsiveContainer>
  );
};
