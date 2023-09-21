import React from "react";
import Chart from "./Chart";
import MonthlyTotal from "./MonthlyTotal";


const ChartContainer = () => {

  return (
    <div className="bg-white w-full rounded-xl mt-4 px-5 py-6 ">
      <h1 className="text-2xl font-bold text-dark-brown">Spending - Last 7 days</h1>
      <div className="pt-8 pb-5">
        <Chart />
      </div>
      <hr className="w-full h-[2px] bg-[#FCF4EE] border-0" />
      <MonthlyTotal />
    </div>
  );
};

export default ChartContainer;
