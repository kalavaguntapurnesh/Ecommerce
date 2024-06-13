import Accordion from "../components/Accordion";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="relative pt-24 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-4">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex justify-center items-center">
                  <h1 className="font-semibold text-4xl">
                    Some useful information
                  </h1>
                </div>
                <div className="flex justify-center items-center pt-2 pb-2">
                  <p className="text-center">
                    Remember that for a result surprising it is necessary{" "}
                    <span className="font-semibold">
                      help us as much as possible
                    </span>
                    : send us all your logos, graphic sketches for reference,
                    main colorways, give us all the details on the style you
                    would like represented in the design and tell us as much as
                    possible about your team.
                  </p>
                </div>
                <div className="w-full flex justify-center items-center pt-4">
                  <div className="md:w-5/6 w-full">
                    <Accordion
                      title="What costs does the service have?"
                      answer="The answer to this question depends on various factors like profile strength, education gap years, experience, IELTS score, and proper counselling and guidance."
                    />
                    <Accordion
                      title="What is included in a service and their products?"
                      answer="Post Graduate Diploma, Master’s Degree, Post Graduate Business Administration are a few to name. There are many capstone courses to pursue after UG."
                    />
                    <Accordion
                      title="What are the countries that easily gives the service?"
                      answer="Visas are issued only if you meet the eligibility requirements. Every visa has different requirements to be met. Depending on the country and the visa you want to apply you will have to see if meet the requirements."
                    />
                    <Accordion
                      title="How can our customers contact us for immediate guidance?"
                      answer="You can contact us through mail on macglobalservices@gmail.com or go to the Contact page for further information. And we are ready to help."
                    />
                  </div>
                </div>

                <div className="md:pt-16 pt-8">
                  <div className="flex justify-center items-center">
                    <h1 className="text-4xl font-semibold">Follow us on</h1>
                  </div>
                  <div className="flex justify-center items-center pt-4 font-normal text-lg">
                    <p className="text-center">
                      Always stay informed and connected to all our channels,
                      support us and help us grow!
                    </p>
                  </div>
                  <div className="grid grid-cols-6 gap-2 pt-8">
                    <a href="" className="flex justify-center items-center">
                      <FaInstagram className="md:w-9 md:h-9 h-8 w-8" />
                    </a>
                    <a href="" className="flex justify-center items-center">
                      <FaFacebookF className="md:w-9 md:h-9 h-8 w-8" />
                    </a>
                    <a href="" className="flex justify-center items-center">
                      <FaXTwitter className="md:w-9 md:h-9 h-8 w-8" />
                    </a>
                    <a href="" className="flex justify-center items-center">
                      <FaWhatsapp className="md:w-9 md:h-9 h-8 w-8" />
                    </a>
                    <a href="" className="flex justify-center items-center">
                      <FaDiscord className="md:w-9 md:h-9 h-8 w-8" />
                    </a>
                    <a href="" className="flex justify-center items-center">
                      <FaLinkedinIn className="md:w-9 md:h-9 h-8 w-8" />
                    </a>
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

export default FAQ;
