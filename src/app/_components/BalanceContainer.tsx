import React from 'react'

const BalanceContainer = () => {
  return (
    <div className="bg-soft-red  w-full flex py-[19px] px-[20.5px] rounded-[10px] justify-between">
      <div className="flex flex-col gap-[2px] ">
        <p className="text-cream text-[15.25px] font-light ">My balance</p>
        <p className="text-[24px] text-very-pale-orange font-semibold -mt-[2px] ">
          $921.48
        </p>
      </div>
      <div className="relative flex items-center">
        <span className="border-white absolute right-[23px] border-2 z-10 bg-transparent rounded-full h-10 w-10"></span>
        <span className="rounded-full absolute h-10 w-10 right-[3px] z-0 bg-dark-brown"></span>
      </div>
    </div>
  );
}

export default BalanceContainer