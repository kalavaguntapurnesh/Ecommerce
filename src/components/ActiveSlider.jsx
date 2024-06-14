import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import one from "../assets/students/My_Profile.jpg";
import two from "../assets/students/Teja.jpg";
import three from "../assets/students/Prashanth.jpg";
import four from "../assets/students/Vivek.jpg";
import five from "../assets/students/Eswar.jpg";
import six from "../assets/students/Ashok.jpg";
import seven from "../assets/students/Sai.jpg";
import eight from "../assets/students/Yash.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const ActiveSlider = () => {
  const ServiceData = [
    {
      title: "Purnesh Kalavagunta",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${one}`,
      university: "Oklahoma State University, USA",
    },
    {
      title: "Teja Samanthavada",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${two}`,
      university: "Queen's Mary University, UK",
    },
    {
      title: "Prashanth D J",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${three}`,
      university: "Toronto National University, Canada",
    },
    {
      title: "Vivek Vardhan Reddy",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${four}`,
      university: "Oklahoma State University, USA",
    },
    {
      title: "Eswar Nadendla",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${five}`,
      university: "Florida State University, USA",
    },
    {
      title: "Sai Venkat Nayini",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${seven}`,
      university: "Indiana State University, USA",
    },
    {
      title: "Ashok Yanamala",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${six}`,
      university: "NJIT(New Jersey), USA",
    },
    {
      title: "Rupesh Kalavagunta",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${eight}`,
      university: "Canberra State University, Australia",
    },
    {
      title: "Arjun Bhatia",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${one}`,
      university: "University of Cincinnati, USA",
    },
    {
      title: "Kailash Parghi",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${two}`,
      university: "Manchester University, UK",
    },
    {
      title: "Bhupathi Raju",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: `${three}`,
      university: "North Western University, USA",
    },
  ];

  return (
    <div className="bg-[#f4f4f4] ">
      <div className="relative pb-4 pt-12">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pt-8">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex justify-center items-center">
                  <h1 className="text-center text-3xl font-semibold">
                    Customers say this about us
                  </h1>
                </div>

                <div className="flex items-center justify-center flex-col bg-[#f4f4f4] pt-8">
                  <Swiper
                    breakpoints={{
                      340: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      1000: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                      },
                    }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="max-w-[90%] lg:max-w-[90%] "
                  >
                    {ServiceData.map((item) => (
                      <SwiperSlide key={item.title}>
                        <div className="rounded-md bg-[#f4f4f4] shadow-lg h-100 ">
                          <div className="flex flex-col justify-center items-center mb-20 ">
                            <div className="w-full flex items-center justify-center mt-3 mb-3">
                              <img
                                src={item.backgroundImage}
                                alt=""
                                width={50}
                                height={50}
                                className="rounded"
                              ></img>
                            </div>

                            <div className="md:h-34 flex justify-center items-center ">
                              <p className="text-[14px] tracking-wide mx-2 font-medium text-black  text-center leading-relaxed">
                                <svg
                                  className="w-4 h-4 mx-auto mb-2 mt-1 text-gray-400 dark:text-gray-600"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 18 14"
                                >
                                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                </svg>
                                {item.content}
                              </p>
                            </div>
                            <div className=" flex justify-center items-center h-8 w-full">
                              <h1 className="font-semibold md:text-[20px] text-[22px] text-colorOne leading-relaxed tracking-wide">
                                {item.title}
                              </h1>
                            </div>
                            <div className=" flex justify-center items-center h-10 w-full">
                              <h1 className="leading-relaxed tracking-wide font-medium text-colorTwo text-center">
                                {item.university}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveSlider;
