"use client";

import React, { useEffect, useState } from "react";

type ChartData = {
  day: string;
  amount: number;
};

const ChartContainer = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const fetchData = () => {
    import("../../../data.json").then((data) => {
      setChartData(data);
    });
    console.log(chartData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div className="w-[375px] h-[667px] bg-cream">ChartContainer</div>;
};

export default ChartContainer;
