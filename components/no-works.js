import Image from "next/image";
import { TbCircle } from "react-icons/tb";
import { MdOutlineMoreVert, MdOutlineMoreHoriz } from "react-icons/md";
import PlusBg from "./../public/plus-bg.svg";
import keyboard from "./../public/keyboard.svg";
import circle from "./../public/circle.svg";
import line from "./../public/line.svg";

const noWorks = () => {
  return (
    <div className="">
      <h1 className="text-center">How it Works</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum
        autem atque cum odit officiis culpa reiciendis ab aliquam eum molestias
        odio, sint unde qui corporis porro minus illo dolorum.
      </p>
      <div className="grid lg:grid-cols-4 lg:flex my-[50px]">
        <div className="flex items-center justify-evenly  mb-2 lg:inline lg:items-center lg:justify-center mr-4">
          <div className="flex flex-col items-center mr-5 mt-5 lg:inline-flex lg:flex-row lg:mb-[50px] lg:space-x-4 lg:ml-[150px]">
            <div className="">
              <div className="h-[60px] w-[60px] sm:h-[100px] sm:w-[100px] mb-4 sm:mb-2">
                <Image src={keyboard} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-1 lg:inline-flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4">
              <TbCircle className="text-gray-400 text-xl" />
              <MdOutlineMoreHoriz className="hidden lg:inline text-gray-400 text-xl" />
              <MdOutlineMoreVert className="lg:hidden text-gray-400 text-xl" />
              <TbCircle className="text-gray-400 text-xl" />
            </div>
          </div>
          <div className="flex space-x-5  lg:inline lg:space-x-0 lg:-mt-0 lg:space-y-4">
            <div className="space-y-2 lg:space-y-4">
              <p className="lg:text-center lg:text-2xl font-semibold sm:text-xl text-lg">
                Step 1
              </p>
              <p className="lg:text-center lg:text-xl font-semibold sm:text-xl text-lg">
                Bridge
              </p>
            </div>
            <p className="text-[13px]  w-[200px] sm:w-[450px] lg:text-center lg:text-xl sm:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
              amet asperiores incidunt quidem, eos possimus quisquam vitae,
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </p>
          </div>
        </div>
     
      </div>

      <button className="border-[2px] border-black rounded-md px-4 sm:px-6 py-1 sm:py-2 font-semibold">
          Add Cronos to MetaAMask
        </button>
    </div>
  );
};

export default noWorks;
