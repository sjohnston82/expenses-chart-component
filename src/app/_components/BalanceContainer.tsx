import React from 'react'

const BalanceContainer = () => {
  return (
    <div className="bg-soft-red h-20 w-full flex p-4 rounded-xl justify-between">
      <div className="flex flex-col gap-[2px]">
        <p className="text-white text-sm">My balance</p>
        <p className="text-xl text-white font-bold tracking-wide">$921.48</p>
      </div>
      <div className="relative flex items-center">
        <span className="border-white absolute right-5 border-2 z-10 bg-transparent rounded-full h-10 w-10"></span>
        <span className="rounded-full absolute h-10 w-10 right-0 z-0 bg-dark-brown"></span>
      </div>
    </div>
  );
}

export default BalanceContainer