import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipPositionerFunction,
  ChartType,
} from "chart.js";
import { Bar } from "react-chartjs-2";

type ChartData = {
  day: string;
  amount: number;
};

type TooltipContext = {
  dataset: {
    label?: string;
  };
  parsed: {
    y: number;
  };
};

type ChartContainerProps = {
  chartData: ChartData[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

declare module "chart.js" {
  interface TooltipPositionerMap {
    myCustomPositioner: TooltipPositionerFunction<ChartType>;
  }
}

Tooltip.positioners.myCustomPositioner = function (elements, eventPosition) {
  // A reference to the tooltip model

  const tooltip = this;
  /* ... */

  return {
    x: 0,
    y: 0,
    xAlign: "center",
    yAlign: "top",
    // You may also include xAlign and yAlign to override those tooltip options.
  };
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
    tooltip: {
      displayColors: false,
      // position: "myCustomPositioner",
      xAlign: "center",
      yAlign: "bottom",
      // footerSpacing: 5,
      caretSize: 0,
      caretPadding: 6,
      backgroundColor: "hsl(25, 47%, 15%)",
      callbacks: {
        title: function () {
          return null;
        },
        label: function (context: TooltipContext) {
          let label = "";
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const ChartContainer = ({ chartData }: ChartContainerProps) => {
  const amounts = chartData.map((a) => a.amount);

  const backgroundColors = chartData.map((c) => {
    if (c.amount > 50) {
      return "hsl(186, 34%, 60%)";
    } else {
      return "hsl(10, 79%, 65%)";
    }
  });

  const data = {
    labels,
    datasets: [
      {
        data: chartData.map((c) => {
          return c.amount;
        }),
        backgroundColor: backgroundColors,
        borderRadius: 4,
      },
    ],
  };
  return (
    <div className="bg-white w-full rounded-xl mt-4 px-5 py-6 ">
      <h1 className="text-2xl font-bold">Spending - Last 7 days</h1>
      <div className="">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default ChartContainer;
