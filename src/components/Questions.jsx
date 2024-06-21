import React, { useState } from "react";
import ContactModal from "./ContactModal";

const Questions = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative pt-2 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-6xl">
            <div className="justify-center w-full ">
              <div className="max-w-6xl w-full bg-[#FAFAFA] dark:bg-[#ffffff] dark:border-none rounded-xl flex flex-col py-8 items-center justify-center mt-10">
                <div className="flex -space-x-2">
                  <img
                    className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=300&amp;h=300&amp;q=80"
                    alt="Image Description"
                  />
                  <img
                    className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=300&amp;h=300&amp;q=80"
                    alt="Image Description"
                  />
                  <img
                    className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=300&amp;h=300&amp;q=80"
                    alt="Image Description"
                  />
                </div>

                <div className="relative z-[10] flex flex-col justify-center items-center">
                  <p className="text-zinc-800 dark:text-[#F0F0F0] font-bold text-xl mt-4">
                    Still have questions?
                  </p>
                  <p className="text-[#7A7A7A] dark:text-[#F0F0F0] font-bold sm:text-[18px] text-[12px] text-center mt-4">
                    Can’t find the answer you’re looking for? Please chat to our
                    friendly team.
                  </p>

                  <div className="pt-6">
                    <a
                      onClick={() => setShowModal(true)}
                      className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-semibold text-white transition duration-1000 ease-out bg-black rounded-full group cursor-pointer"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-companyColor group-hover:translate-x-0 ease-in-out">
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
                      <span className="absolute flex items-center justify-center w-full h-full text-companyColor transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">
                        Get in touch
                      </span>
                      <span className="relative invisible">Button Text</span>
                    </a>
                  </div>

                  <div className="dark:block hidden absolute z-[-100] top-0 left-1/3 lg:w-64 w-0 lg:h-64 h-0 bg-[#D41F30] rounded-full opacity-40 blur-[130px] dark:opacity-30"></div>
                </div>

                <ContactModal
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
                ></ContactModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
