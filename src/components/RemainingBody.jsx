import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const RemainingBody = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);

  const toggleOne = () => {
    setOpenOne(!openOne);
  };

  const toggleTwo = () => {
    setOpenTwo(!openTwo);
  };

  const toggleThree = () => {
    setOpenThree(!openThree);
  };

  const toggleFour = () => {
    setOpenFour(!openFour);
  };

  const toggleFive = () => {
    setOpenFive(!openFive);
  };

  return (
    <div className="h-screen">
      <div className="relative pt-28 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 bg-[#212529]">
                  <div className="flex justify-center items-center h-12 bg-gray-700 cursor-pointer">
                    <h1 className="text-white">1.Style</h1>
                  </div>
                  <div className="flex justify-center items-center h-12 cursor-pointer">
                    <h1 className="text-white">2.Emblishments</h1>
                  </div>
                  <div className="flex justify-center items-center h-12 cursor-pointer">
                    <h1 className="text-white">3.Name & Number</h1>
                  </div>
                  <div className="flex justify-center items-center h-12 cursor-pointer">
                    <h1 className="text-white">4.Quantities & Sizing</h1>
                  </div>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-1 flex-1 overflow-auto ">
                  <div className="col-span-3 h-[100%]">
                    <div className="relative mx-auto">
                      <img
                        className=" w-full object-cover "
                        src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/resizedimageskirti/Ahmedabad_compress.jpg"
                        alt="Random image "
                      />
                      <div className="absolute inset-0 bg-gray-700 opacity-70"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src="https://getmygear.in/tshirtecommerce//uploaded/2023%20Sublimation/Round%20Neck/ND/dg-designer-124461dc170849565889418426910927495.png"
                          alt=""
                          className="w-1/2 h-1/2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="w-full ">
                      <div className="pt-8 flex justify-center items-center">
                        <h1 className="font-semibold text-2xl text-center">
                          Customize Now
                        </h1>
                      </div>
                    </div>

                    <div className="flex justify-center items-center pt-5 flex-col">
                      <div
                        className={
                          openOne
                            ? "h-12 w-10/12 bg-black flex rounded justify-center items-center text-white cursor-pointer ease-in-out"
                            : "h-12 w-10/12 bg-gray-500 flex rounded justify-center items-center text-white cursor-pointer ease-in-out"
                        }
                        onClick={toggleOne}
                      >
                        <div className="grid grid-cols-2  w-full">
                          <h1 className="col-span-1 flex justify-start items-center pl-4">
                            Fabric
                          </h1>
                          <div className="col-span-1 flex justify-end items-center pr-4">
                            {openOne ? (
                              <LuMinus color="text-gray-500" />
                            ) : (
                              <LuPlus color="text-gray-500" />
                            )}
                          </div>
                        </div>
                      </div>

                      {openOne && (
                        <div className="pt-4 pb-4 w-10/12">
                          <h4 className="">
                            A luxurious blend of comfort and elegance, Interlock
                            is renowned for its softness and durability. Elevate
                            your style with this exquisite fabric for a timeless
                            wardrobe essential.
                          </h4>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center items-center pt-3 flex-col">
                      <div
                        className={
                          openTwo
                            ? "h-12 w-10/12 bg-black flex rounded justify-center items-center text-white cursor-pointer"
                            : "h-12 w-10/12 bg-gray-500 flex rounded justify-center items-center text-white cursor-pointer"
                        }
                        onClick={toggleTwo}
                      >
                        <div className="grid grid-cols-2  w-full">
                          <h1 className="col-span-1 flex justify-start items-center pl-4">
                            Collar
                          </h1>
                          <div className="col-span-1 flex justify-end items-center pr-4">
                            {openTwo ? (
                              <LuMinus color="text-gray-500" />
                            ) : (
                              <LuPlus color="text-gray-500" />
                            )}
                          </div>
                        </div>
                      </div>

                      {openTwo && (
                        <div className="pt-4 pb-4 w-10/12">
                          <h4 className="">
                            A luxurious blend of comfort and elegance, Interlock
                            is renowned for its softness and durability. Elevate
                            your style with this exquisite fabric for a timeless
                            wardrobe essential.
                          </h4>

                          <div className="grid md:grid-cols-12 grid-cols-6 gap-2 pt-3">
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-orange-500"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-gray-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-pink-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-green-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-blue-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-violet-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-yellow-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-zinc-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-neutral-300"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-stone-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-950"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-amber-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-lime-400"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-emerald-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-teal-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-cyan-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-sky-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-indigo-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-purple-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-fuchsia-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-rose-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-cyan-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-lime-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-amber-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-indigo-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#f1f1f1]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#ffc020]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#ffc020]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-violet-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-green-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-pink-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-slate-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-blue-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-gray-500"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-black"
                              htmlFor="html"
                            ></label>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center items-center pt-5 flex-col">
                      <div
                        className={
                          openThree
                            ? "h-12 w-10/12 bg-black flex rounded justify-center items-center text-white cursor-pointer"
                            : "h-12 w-10/12 bg-gray-500 flex rounded justify-center items-center text-white cursor-pointer"
                        }
                        onClick={toggleThree}
                      >
                        <div className="grid grid-cols-2  w-full">
                          <h1 className="col-span-1 flex justify-start items-center pl-4">
                            Base
                          </h1>
                          <div className="col-span-1 flex justify-end items-center pr-4">
                            {openThree ? (
                              <LuMinus color="text-gray-500" />
                            ) : (
                              <LuPlus color="text-gray-500" />
                            )}
                          </div>
                        </div>
                      </div>

                      {openThree && (
                        <div className="pt-4 pb-4 w-10/12">
                          <h4 className="">Choose Base Color</h4>

                          <div className="grid md:grid-cols-12 grid-cols-6 gap-2 pt-3">
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-orange-500"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-gray-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-pink-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-green-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-blue-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-violet-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-yellow-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-zinc-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-neutral-300"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-stone-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-950"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-amber-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-lime-400"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-emerald-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-teal-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-cyan-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-sky-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-indigo-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-purple-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-fuchsia-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-rose-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-cyan-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-lime-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-amber-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-indigo-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#f1f1f1]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#ffc020]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#ffc020]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-violet-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-green-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-pink-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-slate-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-blue-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-gray-500"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-black"
                              htmlFor="html"
                            ></label>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center items-center pt-5 flex-col">
                      <div
                        className={
                          openFour
                            ? "h-12 w-10/12 bg-black flex rounded justify-center items-center text-white cursor-pointer"
                            : "h-12 w-10/12 bg-gray-500 flex rounded justify-center items-center text-white cursor-pointer"
                        }
                        onClick={toggleFour}
                      >
                        <div className="grid grid-cols-2  w-full">
                          <h1 className="col-span-1 flex justify-start items-center pl-4">
                            Sleeve
                          </h1>
                          <div className="col-span-1 flex justify-end items-center pr-4">
                            {openFour ? (
                              <LuMinus color="text-gray-500" />
                            ) : (
                              <LuPlus color="text-gray-500" />
                            )}
                          </div>
                        </div>
                      </div>
                      {openFour && (
                        <div className="pt-4 pb-4 w-10/12">
                          <h4 className="">Choose Base Color</h4>

                          <div className="grid md:grid-cols-12 grid-cols-6 gap-2 pt-3">
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-orange-500"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-gray-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-pink-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-green-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-blue-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-violet-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-yellow-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-zinc-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-neutral-300"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-stone-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-950"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-amber-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-lime-400"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-emerald-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-teal-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-cyan-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-sky-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-indigo-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-purple-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-fuchsia-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-rose-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-cyan-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-lime-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-amber-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-indigo-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#f1f1f1]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#ffc020]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#ffc020]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-violet-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-green-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-pink-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-slate-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-blue-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-gray-500"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-black"
                              htmlFor="html"
                            ></label>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center items-center pt-5 flex-col">
                      <div
                        className={
                          openFive
                            ? "h-12 w-10/12 bg-black flex rounded justify-center items-center text-white cursor-pointer"
                            : "h-12 w-10/12 bg-gray-500 flex rounded justify-center items-center text-white cursor-pointer"
                        }
                        onClick={toggleFive}
                      >
                        <div className="grid grid-cols-2 w-full">
                          <h1 className="col-span-1 flex justify-start items-center pl-4">
                            Design Colors
                          </h1>
                          <div className="col-span-1 flex justify-end items-center pr-4">
                            {openFive ? (
                              <LuMinus color="text-gray-500" />
                            ) : (
                              <LuPlus color="text-gray-500" />
                            )}
                          </div>
                        </div>
                      </div>
                      {openFive && (
                        <div className="pt-4 pb-4 w-10/12">
                          <h4 className="">Choose Design Color</h4>

                          <div className="grid md:grid-cols-12 grid-cols-6 gap-2 pt-3">
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-orange-500"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-gray-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-pink-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-green-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-blue-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-violet-800"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-yellow-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-zinc-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-neutral-300"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-stone-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-950"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-amber-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-lime-400"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-emerald-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-teal-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-cyan-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-sky-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-indigo-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-purple-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-fuchsia-600"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-rose-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-cyan-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-lime-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-amber-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-indigo-800"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#f1f1f1]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#ffc020]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-[#ffc020]"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-violet-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-red-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-green-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-pink-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-slate-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-blue-500"
                              htmlFor="html"
                            ></label>{" "}
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-gray-500"
                              htmlFor="html"
                            ></label>
                            <label
                              class="relative flex items-center p-4 rounded cursor-pointer bg-black"
                              htmlFor="html"
                            ></label>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-8 flex justify-center">
                      <a
                        href=""
                        className="relative inline-flex items-center bg-gray-500 justify-center py-2 px-16 overflow-hidden font-semibold text-white transition duration-1000 ease-out rounded group"
                      >
                        <span className="absolute inset-0 flex items-center bg-gray-500 justify-center w-full h-full text-white duration-300 -translate-x-full bg-companyColor group-hover:translate-x-0 ease-in-out">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">
                          Next &#8594;
                        </span>
                        <span className="relative invisible">Button Text</span>
                      </a>
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

export default RemainingBody;
