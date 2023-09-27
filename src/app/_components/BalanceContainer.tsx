import React from 'react'

const BalanceContainer = () => {
  return (
    <div className="bg-soft-red  w-full flex py-[19px] px-[20.5px] lg:px-[29px] lg:py-[19px] lg:rounded-[18px] rounded-[10px] justify-between">
      <div className="flex flex-col gap-[2px] lg:gap-[5px] lg:mt-[3px]">
        <p className="text-cream text-[15.25px] lg:text-[16.5px] font-light lg:mt-[1px] ">
          My balance
        </p>
        <p className="text-[24px] lg:text-[29px] text-very-pale-orange font-semibold -mt-[2px] ">
          $921.48
        </p>
      </div>
      <div className="relative flex items-center">
        <span className="border-cream absolute right-[23px] lg:right-[27px] border-2 z-10 bg-transparent rounded-full h-10 w-10 lg:h-[43px] lg:w-[43px]"></span>
        <span className="rounded-full absolute h-10 w-10 right-[3px] lg:right-[6px] z-0 bg-dark-brown lg:h-[43px] lg:w-[43px]"></span>
      </div>
    </div>
  );
}

export default BalanceContainer