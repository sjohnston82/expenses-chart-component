import React from "react";
import Chart from "./Chart";
import MonthlyTotal from "./MonthlyTotal";


const ChartContainer = () => {

  return (
    <div className="bg-white w-full rounded-xl mt-4 lg:mt-[22px] py-[22px] lg:py-[28px] lg:rounded-[18px]">
      <h1 className="text-[24px] font-bold px-[20.5px] lg:text-[29px] text-dark-brown tracking-[-.0065em] lg:px-[36px]">
        Spending - Last 7 days
      </h1>
      <div className="pt-4 pb-[14px] px-[14px] lg:px-[28px] lg:mb-[12px] lg:pt-[27px]">
        <Chart />
      </div>
    

      <hr className="w-[86%] h-[2px] bg-medium-brown border-0 mx-auto opacity-20 " />
     
      <MonthlyTotal />
    </div>
  );
};

export default ChartContainer;
