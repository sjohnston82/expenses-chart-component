import Image from 'next/image'
import ChartContainer from './_components/ChartContainer';

export default function Home() {
  return <main className="bg-[#0E0E0E] flex justify-center items-center w-full h-[100dvh]">
    <ChartContainer />
  </main>;
}
