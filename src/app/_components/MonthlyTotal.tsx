import React from "react";

const MonthlyTotal = () => {
  return (
    <div className="text-dark-brown pt-[25px] pr-[19px] pl-[20px] lg:pb-1 flex justify-between lg:pt-[30px] lg:px-[36px] ">
      <div className="flex flex-col gap-[-10px] mt-[1px] lg:gap-0 ">
        <p className="text-[15.5px]  font-light lg:-mb-[1px] text-medium-brown leading-tight lg:tracking-wider">
          Total this month
        </p>
        <p className="text-[30px] lg:text-[43px] lg:-mt-[3px] font-bold">$478.33</p>
      </div>
      <div className="flex flex-col items-end justify-end lg:-mb-[-9px]">
        <p className="font-bold leading-tight text-[15.5px]  lg:text-[16.5px]">+2.4%</p>
        <p className="text-[15.5px] font-light text-medium-brown leading-[1.35] lg:text-[16.5px]">
          from last month
        </p>
      </div>
    </div>
  );
};

export default MonthlyTotal;
