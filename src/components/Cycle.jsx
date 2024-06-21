import React from "react";
import { motion } from "framer-motion";
import One from "../../public/One.webp";
import Two from "../../public/Two.webp";
import Three from "../../public/Three.webp";
import Four from "../../public/Four.webp";
import Five from "../../public/Five.webp";

const Cycle = () => {
  const slides = [
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
    {
      image: Five,
    },
  ];

  const duplicatedSlides = [...slides, ...slides];
  return (
    <div className="bg-white">
      <div className="relative lg:pt-20 pt-12 lg:pb-12 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex justify-center items-center">
                  <h1 className="text-center text-5xl font-semibold">
                    Not the usual Jersey
                  </h1>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-center">
                    Be original, you decide how to create your custom uniforms.
                    You can use our Configurator or request a Super Design, the
                    result will be exceptional!
                  </p>
                </div>
                <div className="relative h-full overflow-hidden py-12 bg-white mx-auto">
                  <div className="absolute inset-0 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

                  <motion.div
                    className="flex"
                    animate={{
                      x: ["0%", "-100%"],
                      transition: {
                        ease: "linear",
                        duration: 15,
                        repeat: Infinity,
                      },
                    }}
                  >
                    {duplicatedSlides.map((slide, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: `${100 / slides.length}%` }}
                      >
                        <div className="flex items-center justify-center h-full">
                          <img src={slide.image} alt="" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
