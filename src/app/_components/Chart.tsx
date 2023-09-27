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

function getWindowSize() {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return { innerWidth: 0, innerHeight: 0 }; // Default values when executed in a non-browser environment
}

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

const Chart = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const labels = chartData.map((d) => d.day);

  ChartJS.defaults.color = "hsl(28, 10%, 53%)";
  ChartJS.defaults.font.size = 11.5;
  ChartJS.defaults.font.weight = "300";

  const tickPadding = windowSize.innerWidth < 1024 ? 8 : 2;
  const fontSize = windowSize.innerWidth < 1024 ? 11.5 : 13;


  const options = {
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
        ticks: {
          padding: tickPadding, // Increase the padding between bars and labels
          font: {
            size: fontSize
          }
        },
      },
    },
    layout: {
      padding: {
        top: 11,
        // bottom: -2,
      },
    },
    maintainAspectRatio: false,
  };

  const fetchData = () => {
    import("../../../data.json").then((data) => {
      setChartData(data.default);
    });
  };

  useEffect(() => {
    fetchData();

    function handleWindowResize() {
      const newWindowSize = getWindowSize();
      setWindowSize(newWindowSize);
    }

    // Initial calculation
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
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
        borderRadius: windowSize.innerWidth < 1024 ? 4 : 5,
        hoverBackgroundColor: hoverBackgroundColors,
        borderSkipped: false,
        barThickness: windowSize.innerWidth < 1024 ? 32 : 45,
        color:
          "hsl(25.090909090909097, 47.41379310344826%, 45.490196078431374%)",
      },
    ],
  };
  return (
    <Bar options={options} data={data} className="h-[220px] lg:max-h-[198px]" />
  );
};

export default Chart;
