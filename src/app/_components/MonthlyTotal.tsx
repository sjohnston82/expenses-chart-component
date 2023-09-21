import React from "react";

const MonthlyTotal = () => {
  return (
    <div className="text-dark-brown pt-[25px] pr-[19px] pl-[20px] flex justify-between">
      <div className="flex flex-col gap-[-10px]mt-[1px]">
        <p className="text-[15.5px] font-light text-medium-brown leading-tight">
          Total this month
        </p>
        <p className="text-[30px] font-bold">$478.33</p>
      </div>
      <div className="flex flex-col items-end justify-end ">
        <p className="font-bold leading-tight text-[15.5px]">+2.4%</p>
        <p className="text-[15.5px] font-light text-medium-brown leading-[1.35]">
          from last month
        </p>
      </div>
    </div>
  );
};

export default MonthlyTotal;
