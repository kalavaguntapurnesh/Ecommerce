import React from "react";

const AboutThree = () => {
  return (
    <div className="bg-white ">
      <div className="relative pb-2 pt-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pt-8">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex justify-center items-center">
                  <h1 className="text-center text-3xl font-semibold">
                    Shop with us
                  </h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 pt-4">
                  <a
                    href="/designer"
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <div>
                      <img
                        src="https://www.muftijeans.in/pub/external/images/shirts.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                  <a
                    href="/designer"
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <div>
                      <img
                        src="https://www.muftijeans.in/pub/external/images/5-1.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                  <a
                    href="/designer"
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <div>
                      <img
                        src="https://www.muftijeans.in/pub/external/images/polos.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                  <a
                    href="/designer"
                    className="flex justify-center items-center cursor-pointer"
                  >
                    <div>
                      <img
                        src="https://www.muftijeans.in/pub/external/images/jeans.jpg"
                        alt=""
                      />
                    </div>
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

export default AboutThree;
