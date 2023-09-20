
import React from "react";
import BalanceContainer from "./BalanceContainer";
import ChartContainer from "./ChartContainer";

type ChartData = {
  day: string;
  amount: number;
};

const Container = () => {
 
  return <div className="w-[375px] h-[667px] px-4 py-14 bg-cream">
    <BalanceContainer />
    <ChartContainer />
  </div>;
};

export default Container;
