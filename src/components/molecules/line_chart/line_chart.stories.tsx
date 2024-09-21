import type { Meta, StoryObj } from "@storybook/react";
import { LineChart } from "./line_chart.tsx";

const meta: Meta<typeof LineChart> = {
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  args: {
    dataCollection: dataCollection(),
    xAxisProps: {
      dataKey: "year",
    },
    linePropsCollection: linePropsCollection(),
  },
  decorators: [
    (Story) => (
      <div style={{ height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * グラフ描画用のサンプルデータ
 */
function dataCollection() {
  return [
    {
      year: 2000,
      1: 4000,
      47: 2400,
    },
    {
      year: 2001,
      1: 3000,
      47: 1398,
    },
    {
      year: 2002,
      1: 2000,
      47: 9800,
    },
  ];
}

function linePropsCollection() {
  return [
    { dataKey: "1", name: "北海道" },
    { dataKey: "47", name: "沖縄" },
  ];
}
