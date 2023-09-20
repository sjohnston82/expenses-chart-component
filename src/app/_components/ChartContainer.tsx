import React from "react";
import Chart from "./Chart";


const ChartContainer = () => {

  return (
    <div className="bg-white w-full rounded-xl mt-4 px-5 py-6 ">
      <h1 className="text-2xl font-bold">Spending - Last 7 days</h1>
      <div className="pt-8">
        <Chart />
      </div>
    </div>
  );
};

export default ChartContainer;
