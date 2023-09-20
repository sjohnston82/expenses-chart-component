"use client";

import React, { useEffect, useState } from "react";
import BalanceContainer from "./BalanceContainer";
import ChartContainer from "./ChartContainer";

type ChartData = {
  day: string;
  amount: number;
};

const Container = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const fetchData = () => {
    import("../../../data.json").then((data) => {
      setChartData(data.default);
    });
    // console.log(chartData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div className="w-[375px] h-[667px] px-4 py-14 bg-cream">
    <BalanceContainer />
    <ChartContainer chartData={chartData} />
  </div>;
};

export default Container;
