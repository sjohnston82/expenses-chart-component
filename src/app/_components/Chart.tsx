"use client";

import React, { useState, useEffect } from "react";
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
  ChartEvent,
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

export const options = {
  // turn cursor to point if chartElement (bar) is hovered by targeting the css of the event
  onHover: (event: ChartEvent, chartElement: string | any[]) => {
    if (Array.isArray(chartElement) && chartElement.length > 0) {
      const target = event.native?.target;
      if (target instanceof HTMLElement) {
        target.style.cursor = "pointer";
      }
    } else {
      const target = event.native?.target;
      if (target instanceof HTMLElement) {
        target.style.cursor = "default";
      }
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    labels: {
      color: "hsl(25, 47%, 15%)",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
    tooltip: {
      displayColors: false,
      xAlign: "center" as const,
      yAlign: "bottom" as const,
      caretSize: 0,
      caretPadding: 6,
      backgroundColor: "hsl(25, 47%, 15%)",
      callbacks: {
        title: function () {
          return "";
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
      border: {
        display: false,
      },
    },
  },
  layout: {
    padding: {
      top: 10,
    },
  },
  maintainAspectRatio: false,
};

const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const Chart = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const fetchData = () => {
    import("../../../data.json").then((data) => {
      setChartData(data.default);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const backgroundColors = chartData.map((c) => {
    if (c.amount > 50) {
      return "hsl(186, 34%, 60%)";
    } else {
      return "hsl(10, 79%, 65%)";
    }
  });

  const hoverBackgroundColors = chartData.map((c) => {
    if (c.amount > 50) {
      return "#B4DFE5";
    } else {
      return "#FF9B87";
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
        borderRadius: 3,
        hoverBackgroundColor: hoverBackgroundColors,
        borderSkipped: false,
        color:
          "hsl(25.090909090909097, 47.41379310344826%, 45.490196078431374%)",
      },
    ],
  };
  return <Bar options={options} data={data} className="h-52" />;
};

export default Chart;
