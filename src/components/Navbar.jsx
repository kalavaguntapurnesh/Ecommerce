import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/FooterLogo.png";
import { motion } from "framer-motion";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Modal from "./Modal";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
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
              <img src={Logo} className="lg:w-[86px] w-[76px]" alt="" />
            </div>
            <div>
              <ul className="hidden lg:flex items-center gap-[3vw]">
                {" "}
                <li className="group cursor-pointer uppercase text-gray-600 font-medium text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a href="/">Home</a>
                  <div className="bg-[#3e60e0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer uppercase text-gray-600 font-medium text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a href="/designer">Customize Now</a>
                  <div className="bg-[#3e60e0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer uppercase text-gray-600 font-medium text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a href="/bulk-enquiry">Bulk Enquiry</a>
                  <div className="bg-[#3e60e0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer uppercase text-gray-600 font-medium text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a href="/about-us">About Us</a>
                  <div className="bg-[#3e60e0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer uppercase text-gray-600 font-medium text-sm tracking-wider transition duration-1000 ease-in-out">
                  <a href="/contact">Contact Us</a>
                  <div className="bg-[#3e60e0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
              </ul>
            </div>

            <Modal
              isVisible={showModal}
              onClose={() => setShowModal(false)}
            ></Modal>

            <div className="flex justify-center items-center gap-4  mr-6 ">
              <div className="flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded-full outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent">
                <input
                  type="text"
                  placeholder="Search something..."
                  className="w-full text-sm bg-transparent rounded outline-none pr-2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  className="cursor-pointer fill-gray-400"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </div>
              <a href="/cart" className="cursor-pointer">
                <CiShoppingCart className="w-6 h-6" />
              </a>
              <div className="cursor-pointer">
                <div onClick={() => setShowModal(true)}>
                  <CiUser className="w-6 h-6" />
                </div>
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

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default Navbar;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
