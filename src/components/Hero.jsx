import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import One from "../../public/Hero.webp";

const Hero = () => {
  return (
    <div className="w-full bg-white lg:pt-16 pt-8 lg:h-[75vh] h-auto">
      <div className="relative">
        <img
          src="https://yourdesignstore.s3.amazonaws.com/uploads/yds/bannerImages/17120370054027Website-Banner-Iamge-Desktop.jpg"
          alt=""
          // alt={`slide-${index + 1}`}
          className="w-full h-[550px] lg:object-cover object-center"
        />
        {/* <div className="absolute inset-0 rounded-md"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center w-[50%] ">
          <div className="flex ml-20  flex-col ">
            <h2 className="text-white text-5xl font-bold">
              Customised sportswear
            </h2>
            <h2 className="text-white text-5xl font-bold">
              for you and your team
            </h2>
            <p className="pt-4 text-white text-xl">
              With our 3D configurator, you can easily design
              professional-quality sportswear made just for you. Why not kit out
              your club too with our attractive discounts.
            </p>
            <div className="pt-6">
              <a
                href="/careers"
                className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-normal text-white bg-black transition duration-1000 ease-out rounded-3xl group"
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
                  Collaborate with us &#8594;
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
