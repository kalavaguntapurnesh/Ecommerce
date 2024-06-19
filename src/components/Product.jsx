import React from "react";
import Three from "../../public/Three.webp";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Product = () => {
  return (
    <div className="bg-white ">
      <div className="relative pb-8 pt-32">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-4">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className=" flex justify-center items-start">
                    <img src={Three} alt="" />
                  </div>
                  <div className="md:pt-20 flex justify-start flex-col">
                    <div className="flex md:justify-start justify-center">
                      <h1 className="font-semibold text-lg text-gray-600">
                        Cricket
                      </h1>
                    </div>
                    <div className="flex md:justify-start justify-center pt-5">
                      <h1 className="md:text-3xl text-2xl ">
                        Custom Sports Jersey – Sub Design-SUB-ND-62
                      </h1>
                    </div>
                    <div className="flex md:justify-start justify-center pt-5">
                      <h1 className="md:text-3xl text-2xl ">
                        $6.40 <span className="text-lg">(In stock)</span>
                      </h1>
                    </div>
                    <div className="md:flex hidden md:justify-start justify-center pt-5">
                      <h1 className="text-gray-500">
                        100% Polyester & Premium Sublimation prints
                      </h1>
                    </div>
                    <div className="flex md:justify-start justify-center pt-2">
                      <h1 className="text-gray-500">
                        Includes complete prints front and back Top class
                        sublimations ready templates
                      </h1>
                    </div>
                    <div className="flex md:justify-start justify-center pt-2">
                      <h1 className="text-gray-500">
                        Need More customization call us or Whatsapp us now
                      </h1>
                    </div>
                    <div className="flex md:justify-start justify-center pt-4">
                      <h1 className="text-gray-500">
                        Estimated delivery on 28 June - 5 July, 2024
                      </h1>
                    </div>

                    <div className="pt-8 flex md:justify-start justify-center">
                      <a
                        href="/design-your-own"
                        className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-medium text-white bg-black transition duration-1000 ease-out rounded-full group"
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
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">
                          Customize Now &#8594;
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

export default Product;
