import Image from "next/image";
import { TbCircle } from "react-icons/tb";
import { MdOutlineMoreVert, MdOutlineMoreHoriz } from "react-icons/md";
import Green from "../public/green.svg";
import purple from "../public/purple.svg";
import blue from "../public/blue.svg";
import Light from "../public/light.svg";
import GreenHub from "../public/greensub.svg";
import PlusBg from "./../public/plus-bg.svg";
import keyboard from "./../public/keyboard.svg";
import circle from "./../public/circle.svg";
import line from "./../public/line.svg";
import Referrel from "../public/referrel.svg";
import Deposit from "../public/Deposit.svg";
import Compound from "../public/Compound.svg";
import Claim from "../public/Claim-2.svg";

const Works = () => {
  return (
    <div className="max-w-7xl m-auto px-4 xl:px-0">
      <div className="space-y-6">
        <h1 className="text-center text-3xl font-bold">How it Works</h1>
        <p className="text-center text-lg 2xl:w-6/12 2xl:mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa harum
          autem atque cum odit officiis culpa reiciendis ab aliquam eum
          molestias odio, sint unde qui corporis porro minus illo dolorum.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 py-[100px]">
        {/* item 1 */}
        <div className="flex items-center justify-evenly  mb-2 lg:inline lg:items-center lg:justify-center mr-6 p-5 lg:p-0">
          <div className="flex flex-col mr-5 lg:inline-flex lg:flex-row mb-[50px] lg:space-x-8 lg:ml-[50px]">
            <div className="h-[60px] w-[60px] sm:h-[100px] sm:w-[100px]">
              <Image src={Green} alt="" />
            </div>
            <div className="flex flex-col items-center space-y-1 lg:inline-flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4">
              <TbCircle className="text-gray-400 text-xl" />
              <MdOutlineMoreHoriz className="hidden lg:inline text-gray-400 text-xl" />
              <MdOutlineMoreVert className="lg:hidden text-gray-400 text-xl" />
              <TbCircle className="text-gray-400 text-xl" />
            </div>
          </div>
          <div className="flex space-x-5  lg:inline lg:space-x-0 lg:-mt-0 lg:space-y-4 -mt-[30px] sm:-mt-[120px]">
            <div className=" lg:space-y-4">
              <p className="lg:text-center lg:text-xl font-semibold sm:text-xl">
                Step 1
              </p>
              <p className="lg:text-center lg:text-xl font-semibold">Bridge</p>
            </div>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
              amet asperiores incidunt quidem, eos possimus quisquam vitae,
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </p>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex items-center justify-evenly  mb-2 lg:inline lg:items-center lg:justify-center mr-6 p-5 lg:p-0">
          <div className="flex flex-col items-center mr-5 lg:inline-flex lg:flex-row mb-[50px] lg:space-x-8 lg:ml-[50px]">
            <div className="h-[60px] w-[60px] sm:h-[100px] sm:w-[100px] mb-4 sm:mb-2">
              <Image src={purple} alt="" />
            </div>
            <div className="flex flex-col items-center space-y-1 lg:inline-flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4">
              <TbCircle className="text-gray-400 text-xl" />
              <MdOutlineMoreHoriz className="hidden lg:inline text-gray-400 text-xl" />
              <MdOutlineMoreVert className="lg:hidden text-gray-400 text-xl" />
              <TbCircle className="text-gray-400 text-xl" />
            </div>
          </div>
          <div className="flex space-x-5  lg:inline lg:space-x-0 lg:-mt-0 lg:space-y-4 -mt-[30px] sm:-mt-[120px]">
            <div className=" lg:space-y-4">
              <p className="lg:text-center lg:text-xl font-semibold sm:text-xl">
                Step 2
              </p>
              <p className="lg:text-center lg:text-xl font-semibold">Bridge</p>
            </div>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
              amet asperiores incidunt quidem, eos possimus quisquam vitae,
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </p>
          </div>
        </div>

        {/* item 3 */}

        <div className="flex items-center justify-evenly  mb-2 lg:inline lg:items-center lg:justify-center mr-6 p-5 lg:p-0">
          <div className="flex flex-col items-center mr-5 lg:inline-flex lg:flex-row mb-[50px] lg:space-x-8 lg:ml-[50px]">
            <div className="h-[60px] w-[60px] sm:h-[100px] sm:w-[100px] mb-4 sm:mb-2">
              <Image src={keyboard} alt="" />
            </div>
            <div className="flex flex-col items-center space-y-1 lg:inline-flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4">
              <TbCircle className="text-gray-400 text-xl" />
              <MdOutlineMoreHoriz className="hidden lg:inline text-gray-400 text-xl" />
              <MdOutlineMoreVert className="lg:hidden text-gray-400 text-xl" />
              <TbCircle className="text-gray-400 text-xl" />
            </div>
          </div>
          <div className="flex space-x-5  lg:inline lg:space-x-0 lg:-mt-0 lg:space-y-4 -mt-[30px] sm:-mt-[120px]">
            <div className=" lg:space-y-4">
              <p className="lg:text-center lg:text-xl font-semibold sm:text-xl">
                Step 3
              </p>
              <p className="lg:text-center lg:text-xl font-semibold">Bridge</p>
            </div>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
              amet asperiores incidunt quidem, eos possimus quisquam vitae,
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </p>
          </div>
        </div>

        {/* item 4 */}
        <div className="flex items-center justify-evenly  mb-2 lg:inline lg:items-center lg:justify-center mr-6 p-5 lg:p-0">
          <div className="flex flex-col items-center mr-5 lg:inline-flex lg:flex-row mb-[50px] lg:space-x-8 lg:ml-[50px]">
            <div className="h-[60px] w-[60px] sm:h-[100px] sm:w-[100px]">
              <Image src={blue} alt="" />
            </div>
            <div className="flex flex-col items-center space-y-1 lg:inline-flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4">
              <TbCircle className="text-gray-400 text-xl hidden" />
              <MdOutlineMoreHoriz className="text-gray-400 text-xl hidden" />
              <MdOutlineMoreVert className=" text-gray-400 text-xl hidden" />
              <TbCircle className="text-gray-400 text-xl hidden" />
            </div>
          </div>
          <div className="flex space-x-5  lg:inline lg:space-x-0 lg:-mt-0 lg:space-y-4 -mt-[30px] sm:-mt-[120px]">
            <div className=" lg:space-y-4">
              <p className="lg:text-center lg:text-xl font-semibold sm:text-xl">
                Step 4
              </p>
              <p className="lg:text-center lg:text-xl font-semibold">Bridge</p>
            </div>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
              amet asperiores incidunt quidem, eos possimus quisquam vitae,
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-10">
        <button className="bg-white outline outline-gray-200 text-black px-[14px] py-[6px] lg:px-[16px] xl:px-[17px] lg:py-2 xl:py-2 rounded-md font-bold">
          Add Cronos to MetaAMask
        </button>
      </div>
    </div>
  );
};

export default Works;
