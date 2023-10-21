import { ArrowRightCircle, ArrowUpRight, ChevronsRight, LibraryBig, MoveRight } from "lucide-react";
import { Lottie } from "./_components/lotties";

export default function Home() {
  return (
    <div className="h-[calc(100vh)] pt-[56px] overflow-scroll">
      <NumberOne />
      <div className="my-10 h-[350px] p-6">
        <div className="grid grid-cols-5 h-full">


          <div className="col-span-1 justify-between flex flex-col">
            <div className="flex bg-[#191818] rounded-3xl h-full"></div>
            <div className="flex bg-[#EDEDEF] rounded-lg h-full"></div>
          </div>


          <div className="col-span-2 flex flex-col px-3">
            <div className="flex h-full bg-[url('../public/waves-v1.png')] bg-cover border-[#D1B7FF] border rounded-3xl overflow-hidden">
            </div>
          </div>
          <div className="col-span-1 justify-between flex flex-col">
            <div className="flex bg-[#EDEDEF] rounded-3xl h-full"></div>
            <div className="flex bg-[url('../public/orange-girl.png')] bg-cover  rounded-3xl h-full"></div>
          </div>
          <div className="col-span-1 justify-between flex flex-col">
            <div className="flex flex-col items-center justify-center bg-[#D1B7FF] rounded-3xl h-full">
              <span className="text-white text-lg font-bold">Mentorships</span>
              <span className="text-white text-lg font-bold">Coaches</span>
            </div>
            <div className="flex bg-[#191818] rounded-lg h-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const NumberOne = () => {
  return (
    <div className="h-[264px] p-6 my-10">
      <div className="grid grid-cols-5 h-full">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  )
}

const LeftPanel = () => {
  return (
    <div className="col-span-1 border-r justify-between flex flex-col pb-[10px]">
      <div>
        <LibraryBig className="text-[#D1B7FF]" />

        <div className="flex flex-col my-6">
          <div className="flex items-center">

            <span className="text-sm font-medium text-[#191818] my-2">Get Started </span>
            <MoveRight className="h-5 w-5s text-[#D1B7FF] mx-3" />
          </div>
          <span className="text-sm font-normals text-[#999]">How it works</span>
          <span className="text-sm font-normal text-[#999] my-2">About us</span>
        </div>

      </div>

      <BlogWidget />
    </div>
  )
}

const BlogWidget = () => {
  return (
    <div className="border flex rounded-xl items-start justify-between mr-10 p-3 bg-[#EDEDEF]">
      <div>
        <div className="flex items-center justify-start">
          <span className="w-3 h-3 bg-[#D1B7FF] mr-2" />
          <span className="font-bold text-sm">BLOG</span>
        </div>
        <span className="text-xs">Read Latest Post</span>
      </div>

      <div className="flex">
        <ArrowUpRight className="h-5 w-5" />
      </div>
    </div>
  )
}

const RightPanel = () => {
  return (
    <div className="col-span-4 pt-8 px-24 flex flex-col">
      <div className="flex items-center">
        <span className="text-[3rem] font-thin text-[#191818] tracking-wider">Empowering</span>
        <ChevronsRight className="h-16 w-16 text-[#D1B7FF] mx-3 stroke-[3px]" />

        <div className="flex items-center w-72">
          <span className="text-xs leading-tight text-[#191818]/50">Onboarded <span className="font-bold text-[#FF5730]"> +10,000 international students</span> from <span className="font-bold text-[#FF5730]">65 countries</span> worlwide.</span>
        </div>
      </div>


      <div className="flex items-center justify-center">
        <span className="border-[4px] border-[#EDEDEF] mx-6 px-1 py-0 rounded-xl text-[#191818] font-thin text-md">01</span>
        <span className="text-[3rem] font-thin text-[#191818] rounded-full">international</span>
        <span className="text-[3rem] font-bold text-[#D1B7FF] px-3 rounded-full">Students</span>
      </div>
      <div className="flex items-center justify-end">

        <span className="text-[3rem] font-thin text-[#D1B7FF] mx-3">around</span>
        <span className="text-[3rem] font-thin text-[#191818] mr-[-24px]"> the gl</span>
        <Lottie />

        <span className="text-[3rem] font-thin text-[#191818] ml-[-24px] tracking-wider">be</span>
        <div className="flex items-center justify-center bg-[#FF5730] py-[6px] mt-1 rounded-full mx-6">
          <ArrowRightCircle className="text-background mx-2" />
          <div className="flex items-center justify-center px-6">

            <span className="font-normal text-sm text-background ">Join us today!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* 

#E3E3E1
#FF5730
#191818
#D1B7FF
#FFFFFF

#EFEFED - secondary gray

*/