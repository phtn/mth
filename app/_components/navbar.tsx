'use client'
import { ArrowUpRight } from "lucide-react"

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full h-[56px] items-center justify-between flex px-6">
      <div className="flex">
        <div className=" h-[32px] px-3 flex bg-[#FF5730] rounded-full items-center justify-center">
          <span className="font-extrabold text-[#EFEDED] text-xs">Melbourne</span>
        </div>
        <div className=" h-[32px] px-3 flex bg-[#EFEDED] rounded-full items-center justify-center">
          <span className="font-extrabold text-[#191818] text-xs">Talent</span>
          <span className="font-extrabold text-[#191818] text-xs">Hub</span>
        </div>
      </div>
      <div className="flex">
        <span className="h-[32px] w-32 bg-[#EFEDED] mx-1 rounded-full items-center justify-center flex text-xs text-[#FF5730] font-bold"> +500 Coaches</span>
        <span className="h-[32px] w-20 bg-[#EFEDED] mx-1 rounded-full items-center justify-center flex text-xs text-stone-700"> Login</span>
        <span className="h-[32px] w-20 bg-[#D1B7FF] mx-1 rounded-full items-center justify-center flex text-xs text-white"> Join <ArrowUpRight className="w-4 h-4 stroke-1" /></span>
      </div>

    </div>
  )
}
export { Navbar } 