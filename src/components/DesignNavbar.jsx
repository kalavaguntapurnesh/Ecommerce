import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/FooterLogo.png";
import { motion } from "framer-motion";
import { CiUndo } from "react-icons/ci";
import { CiRedo } from "react-icons/ci";
import { IoMdFolderOpen } from "react-icons/io";
import { CiSaveDown1 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Modal from "./Modal";
import { CgMenuGridO } from "react-icons/cg";

import React from "react";

const DesignNavbar = () => {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" md:z-20 z-20 fixed w-full bg-white">
      <div className="w-full mx-auto max-w-[1400px]">
        <div className="justify-center w-full">
          <div className="text-black flex justify-between items-center lg:shadow-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-24 w-full lg:top-0 top-0 bg-white max-w-[1400px] mx-auto">
            <div className="ml-2 flex flex-row justify-center items-center">
              <img src={Logo} className=" w-[72px]" alt="" />
            </div>
            <div className="flex flex-row justify-between gap-6">
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <CiUndo className="w-6 h-6" />
                <h1 className="text-xs text-gray-600">Undo</h1>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <CiRedo className="w-6 h-6" />
                <h1 className="text-xs text-gray-600">Redo</h1>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <IoMdFolderOpen className="w-6 h-6" />
                <h1 className="text-xs text-gray-600">Select All</h1>
              </div>
            </div>

            <Modal
              isVisible={showModal}
              onClose={() => setShowModal(false)}
            ></Modal>

            <div className="flex justify-center items-center gap-6">
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <CiSaveDown1 className="w-6 h-6" />
                <h1 className="text-xs text-gray-600">Save</h1>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <FaRegEye className="w-6 h-6" />
                <h1 className="text-xs text-gray-600">View</h1>
              </div>

              <div className="flex justify-center items-center">
                <button className="text-center px-8 py-2 bg-slate-700 rounded-3xl text-white text-sm">Buy Now</button>
              </div>

              
            </div>

            <div onClick={handleNav} className="block lg:hidden cursor-pointer">
              {!nav ? (
                <CgMenuGridO size={30} className=" mr-4 text-gray-900" />
              ) : (
                <IoMdClose size={30} className=" mr-4 text-gray-900" />
              )}
            </div>

            <div
              className={
                !nav
                  ? "lg:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
                  : "lg:hidden fixed left-0 top-0 w-[70%] border-r h-[75%] bg-white dark:bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              }
            >
              <div className="w-full flex flex-row justify-start items-center">
                <img src={Logo} className="w-[86px] ml-3" alt="" />
                <div></div>
              </div>

              <ul className=" uppercase p-4">
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/">Shop All</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/designer">Customize Now</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/bulk-enquiry">Bulk Enquiry</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/about-us">About Us</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignNavbar;
