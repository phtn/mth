import { ArrowRightCircle, ArrowUpRight, ChevronsRight, LibraryBig, MoveRight } from "lucide-react";
import { Lottie } from "./_components/lotties";

export default function Home() {
  return (
    <div className="h-[calc(100vh)] pt-[56px] overflow-scroll px-6">
      <NumberOne />
      <NumberTwo />
    </div>
  )
}

const NumberOne = () => {
  return (
    <div className="md:p-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-10 h-full">
        <LeftPanel />
        <SegmentCount />
        <RightPanel />
      </div>
    </div>
  )
}

const SegmentCount = () => {
  return (
    <div className="col-span-1 justify-center md:flex">
      <div className="h-[56px] w-[56px] bg-[#D1B7FF] items-center justify-center flex rounded-2xl">
        <span className="text-3xl text-white font-extrabold">01</span>
      </div>
    </div>
  )
}

const BlogWidget = () => {
  return (
    <div className="flex rounded-xl items-start justify-between bg-[#EDEDEF]">
      <div>
        <div className="flex items-center justify-start">
          <span className="w-4 h-4 bg-[#D1B7FF] mr-2" />
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

const LeftPanel = () => {
  return (
    <div className="col-span-2 md:min-w-[200px] bg-[#EDEDEF] p-6 rounded-3xl hidden md:flex border-r justify-between flex-col">
      <div>
        <LibraryBig className="text-[#D1B7FF]" />

        <div className="flex flex-col my-6">
          <div className="flex items-center">

            <span className="text-sm font-medium text-[#191818] my-2">Get Started </span>
            <MoveRight className="h-5 w-5s text-[#D1B7FF] mx-3" />
          </div>
          <span className="text-sm font-normal text-[#999]">How it works</span>
        </div>

      </div>

      <BlogWidget />
    </div>
  )
}

const RightPanel = () => {
  return (
    <div className="col-span-7 md:col-span-7 flex flex-col md:justify-start justify-center">
      <div className="flex items-center md:mt-[-6px]">

        <span className="md:text-[3rem] text-[2rem] md:font-thin text-[#191818] tracking-wider">Empowering</span>
        <ChevronsRight className="md:h-16 md:w-16 h-10 w-10 text-[#D1B7FF] mx-3 stroke-[3px]" />

        <div className="flex items-center w-64">
          <div className="bg-[#EDEDEF] rounded-full px-6 h-12 items-center justify-center flex flex-col">
            <span className="text-sm text-[#FF5730] font-bold">+10,000</span>
            <span className="text-[0.70rem]">Onboarded</span>
          </div>
          <div className="bg-[#EDEDEF] rounded-full px-6 h-12 items-center justify-center md:flex hidden flex-col">
            <span className="text-sm text-[#FF5730] font-bold">65</span>
            <span className="text-[0.70rem]">Countries</span>
          </div>
          {/* <span className="text-xs leading-tight text-[#191818]/50">Onboarded <span className="font-bold text-[#FF5730]"> +10,000 international students</span> from <span className="font-bold text-[#FF5730]">65 countries</span> worlwide.</span> */}
        </div>
      </div>


      <div className="flex md:items-center">
        <span className="md:text-[3rem] text-[2rem] font-normal md:font-thin text-[#191818] rounded-full mr-6">International</span>
        <span className="md:text-[3rem] text-[2rem] font-bold text-[#D1B7FF] md:px-3 rounded-full">Students</span>
      </div>

      <div className="hidden md:flex items-center">

        {/* <span className="text-[3rem] font-thin text-[#D1B7FF] mr-3"></span> */}
        <span className="text-[3rem] font-thin text-[#191818] mr-[-24px]">around the gl</span>
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

const NumberTwo = () => {
  return (
    <div className="my-10 md:h-[350px] h-full flex p-6">
      <div className="grid grid-cols-5 h-full w-full">


        <div className="col-span-1 justify-between md:flex flex-col hidden">
          <div className="flex bg-[#191818] rounded-3xl h-full"></div>
          <div className="flex bg-[#EDEDEF] rounded-lg h-full"></div>
        </div>


        <div className="col-span-5 md:col-span-2 md:flex hidden flex-col">
          <div className="flex h-full bg-[url('../public/waves-v1.png')] bg-cover border-[#D1B7FF] border rounded-3xl overflow-hidden">
          </div>
        </div>
        <div className="col-span-5 md:col-span-1 justify-between flex flex-col">
          <div className="md:flex hidden bg-[#EDEDEF] rounded-3xl h-full"></div>
          <div className="flex bg-[url('../public/orange-girl.png')] bg-cover  rounded-3xl h-full"></div>
        </div>
        <div className="col-span-5 md:col-span-1 justify-between flex flex-col">
          <div className="flex flex-col items-center justify-center bg-[#FF5730] rounded-3xl h-full">
            <span className="text-white text-lg font-bold">Mentorships</span>
            <span className="text-white text-lg font-bold">Coaches</span>
          </div>
          <div className="md:flex hidden bg-[#191818] rounded-lg h-full"></div>
        </div>
        <div className="col-span-5 md:col-span-1 flex flex-col md:hidden">
          <div className="flex h-full bg-[url('../public/waves-v1.png')] bg-cover border-[#D1B7FF] border rounded-3xl overflow-hidden">
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