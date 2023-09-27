
import React from "react";
import BalanceContainer from "./BalanceContainer";
import ChartContainer from "./ChartContainer";

type ChartData = {
  day: string;
  amount: number;
};

const Container = () => {
 
  return (
    <div className="w-[375px] h-[667px] px-4 py-[67px] bg-cream lg:w-[1308px] lg:grid lg:place-items-center lg:h-[100dvh]">
      <div className="lg:w-[490px] lg:min-h-[600px] lg:flex lg:flex-col lg:gap-0">
        <BalanceContainer />
        <ChartContainer />
      </div>
    </div>
  );
};

export default Container;
