import React from "react";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";

const AboutFour = () => {
  const data = [
    {
      image: "https://www.muftijeans.in/pub/external/images/1.jpg",
      heading: "IT Software Solution & Support.",
      button: "Journey Starts here",
    },
    {
      image: "https://www.muftijeans.in/pub/external/images/5.jpg",
      heading: "Vahas Technolgies Technical Support.",
      button: "Explore with us",
    },
    {
      image: "https://www.muftijeans.in/pub/external/images/4.jpg",
      heading: "Solid battle tested Infrastructure.",
      button: "Make a better future",
    },
    {
      image: "https://www.muftijeans.in/pub/external/images/2.jpg",
      heading: "Better User Interface Structure.",
      button: "Collaborate with us",
    },
  ];

  return (
    <div className="bg-white ">
      <div className="relative pb-4 pt-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-4 pt-8">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex justify-center items-center">
                  <h1 className="text-center text-3xl font-semibold">
                    Our Various Varities
                  </h1>
                </div>
                <div className="pt-6">
                  <Swiper
                    modules={[Autoplay, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay
                  >
                    {data.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative">
                          <img
                            src={img.image}
                            alt={`slide-${index + 1}`}
                            className="w-full h-[500px] object-cover"
                          />
                          <div className="absolute inset-0 bg-gray-700 opacity-40 rounded-md"></div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="pt-4 flex justify-center items-center">
                  <p className="text-center">
                    Everything about this island city, reflects the creative,
                    transformative, and inclusive spirit of the brand while it
                    lives, struggles, and expresses itself, alongside its
                    patrons in an unforgiving and uncompromising world. From the
                    jam-packed local from Virar to the glamorous streets of
                    Bandra to the artistic heritage of Kala Ghoda, Mumbai has
                    been at the very centre of India’s march from independence
                    toward self-reliance. The hub of the arts, entertainment,
                    and finance, Mumbai is where talent always begins its
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
