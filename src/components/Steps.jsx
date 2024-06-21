import React from "react";
import Three from "../../public/Three.webp";

const Steps = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-16">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <div className="lg:hidden block">
                      <h1 className=" text-4xl font-bold text-center">
                        How to design your own gamer clothes in our 3D
                        configurator
                      </h1>
                    </div>
                    <div className="lg:hidden block pt-2">
                      <p className="text-center font-normal text-base">
                        Create your custom eSports jersey in just 5 simple
                        steps:
                      </p>
                    </div>
                    <div className="lg:block hidden">
                      <h1 className="text-5xl font-semibold">
                        How to design your own
                      </h1>
                      <h1 className="text-5xl font-semibold pt-1">
                        gamer clothes in our 3D
                      </h1>
                      <h1 className="text-5xl font-semibold pt-1">
                        configurator
                      </h1>
                    </div>
                    <div className="lg:block hidden pt-2">
                      <p className=" font-normal text-lg">
                        Create your custom eSports jersey in just 5 simple
                        steps:
                      </p>
                    </div>

                    <div className="flex md:justify-start justify-center flex-col mt-8">
                      <div className=" mb-3">
                        <div className="grid grid-cols-6 ">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl">1</h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-start">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                First, select the desired eSports product in the
                                product overview and open it in our 3D
                                configurator
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mb-3">
                        <div className="grid grid-cols-6">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl">2</h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-start">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                Then you can choose between different custom
                                eSports jersey designs, which you can then
                                refine according to your own preferences.
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mb-3">
                        <div className="grid grid-cols-6">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl">3</h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-center">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                You can add patterns and colour gradients to
                                give your eSports jersey an extra special touch.
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mb-4">
                        <div className="grid grid-cols-6">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl">4</h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-center">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                Team logos, badges, player numbers and names can
                                be easily added via drag & drop or via the menu
                                bar.
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className=" mb-3">
                        <div className="grid grid-cols-6">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl">5</h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-center">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                Once you've designed your custom eSports jersey,
                                you can use our voting function to have your
                                friends choose their favourite eSports jersey
                                design.
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center items-start">
                    <img src={Three} alt="" />
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

export default Steps;
