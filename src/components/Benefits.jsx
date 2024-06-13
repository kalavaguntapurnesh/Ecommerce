import React from "react";
import Fast from "../assets/fast.svg";
import Quality from "../assets/quality.svg";
import Delivery from "../assets/delivery.svg";

const Benefits = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="relative lg:pt-8 pt-4 lg:pb-16 pb-12">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex justify-center items-center">
                  <h1 className="text-center md:text-5xl text-3xl md:font-semibold font-bold">
                    Your advantages with our 3D configurator
                  </h1>
                </div>
                <div className="grid lg:grid-cols-3 gap-4 pt-12">
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={Quality} alt="" className="w-20 h-20" />
                    </div>
                    <div className="text-center pt-4">
                      <h1 className="text-2xl font-semibold">
                        Wide range of products
                      </h1>
                    </div>
                    <div className="text-center pt-4">
                      <p>
                        You can design a lot more than just jerseys. We also
                        have shorts, hoodies, tracksuits and more.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={Delivery} alt="" className="w-20 h-20" />
                    </div>
                    <div className="text-center pt-4">
                      <h1 className="text-2xl font-semibold">
                        No minimum order quantity
                      </h1>
                    </div>
                    <div className="text-center pt-4">
                      <p>
                        Production starts from just 1 item. For repeat orders,
                        we guarantee the same price as your last order.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={Fast} alt="" className="w-20 h-20" />
                    </div>
                    <div className="text-center pt-4">
                      <h1 className="text-2xl font-semibold">
                        Super fast Delivery
                      </h1>
                    </div>
                    <div className="text-center pt-4">
                      <p>
                        All printing costs are included, no matter how many
                        different elements you include on your jersey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center pt-8 pb-4">
                  <a
                    href="/careers"
                    className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-medium text-white bg-black transition duration-1000 ease-out rounded-full group"
                  >
                    <span className="absolute  inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-companyColor group-hover:translate-x-0 ease-in-out">
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
                      Collaborate with us &#8594;
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
  );
};

export default Benefits;
