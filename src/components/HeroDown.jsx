import React from "react";
import { PiTruckTrailerFill } from "react-icons/pi";
import { FaTshirt } from "react-icons/fa";
import { GiStorkDelivery } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";

const HeroDown = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="relative lg:pt-32 pt-16 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                  <div className="border border-gray-500 rounded-full hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out h-20 flex justify-center items-center">
                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-1 flex justify-center items-center">
                        <PiTruckTrailerFill className="w-8 h-8" />
                      </div>
                      <div className="col-span-3 flex flex-col ">
                        <h1 className="font-medium lg:text-base text-sm">
                          RUSH DELIVERY
                        </h1>
                        <p className="text-gray-700 md:text-base text-xs">
                          Pan India, in 4 working days
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-500 rounded-full hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out h-20 flex justify-center items-center">
                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-1  flex justify-center items-center">
                        <FaTshirt className="w-8 h-8" />
                      </div>
                      <div className="col-span-3  flex flex-col">
                        <h1 className="font-medium lg:text-base text-sm">
                          SINGLE PIECE ORDERS
                        </h1>
                        <p className="text-gray-700 md:text-base text-xs">
                          No minimum order amount
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-500 rounded-full h-20 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out flex justify-center items-center">
                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-1 flex justify-center items-center">
                        <GiStorkDelivery className="w-8 h-8" />
                      </div>
                      <div className="col-span-3  flex flex-col">
                        <h1 className="font-medium lg:text-base text-sm">
                          CUSTOMIZATION TOOL
                        </h1>
                        <p className="text-gray-700 md:text-base text-xs">
                          With 360 preview
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-500 rounded-full h-20 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out flex justify-center items-center">
                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-1  flex justify-center items-center">
                        <MdLocalGroceryStore className="w-8 h-8" />
                      </div>
                      <div className="col-span-3 flex flex-col">
                        <h1 className="font-medium lg:text-base text-sm">
                          ZERO PLASTIC
                        </h1>
                        <p className="text-gray-700 md:text-base text-xs">
                          Eco friendly packaging
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDown;
