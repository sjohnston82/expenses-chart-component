import React from "react";
import Chart from "./Chart";
import MonthlyTotal from "./MonthlyTotal";


const ChartContainer = () => {

  return (
    <div className="bg-white w-full rounded-xl mt-4  py-[22px] ">
      <h1 className="text-[24px] font-bold px-[20px] text-dark-brown tracking-[-.0065em]">
        Spending - Last 7 days
      </h1>
      <div className="pt-4 pb-5 px-[14px]">
        <Chart />
      </div>
      <hr className="w-full h-[2px] bg-[#FCF4EE] border-0" />
      <MonthlyTotal />
    </div>
  );
};

export default ChartContainer;
