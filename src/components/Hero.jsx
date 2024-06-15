import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import One from "../../public/Hero.jpg";
import Two from "../../public/HomeTwo.png";
import Three from "../../public/HomeThree.png";
import Four from "../../public/HomeFour.png";

const Hero = () => {
  const data = [
    {
      image: One,
    },
    {
      image: Two,
    },
    {
      image: Three,
    },
    {
      image: Four,
    },
  ];

  return (
    <div className="w-full bg-white lg:pt-16 pt-8 lg:h-[75vh] h-auto">
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
                 className="w-full lg:h-[550px] h-[500px] lg:object-cover object-center"
               
              />
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
