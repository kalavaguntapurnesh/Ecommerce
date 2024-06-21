import { IoMdMailUnread } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ContactOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="bg-[#212529] h-12 flex justify-center items-center">
              <h1 className="uppercase text-center text-white md:text-sm text-xs">
                FREE SHIPPING & 30 DAY RETURNS | SIGN UP AND GET 15% OFF* USE
                CODE : NEW15 | CUSTOMER CARE # 9999999999
              </h1>
            </div>
            <div className="pt-8">
              <h1 className="uppercase text-3xl text-center font-medium">
                contact us
              </h1>
            </div>
            <div className="flex justify-center items-center pt-4">
              <p>
                We`re here to help you with whatever you need and to answer any
                questions about your online or in-store shopping.
              </p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex justify-center items-center">
                  <div className="bg-[#f4f4f4] h-32 lg:w-3/4 w-full rounded">
                    <div className="flex justify-center items-center pt-4">
                      <FaAddressBook className="w-8 h-8" />
                    </div>
                    <div className="flex justify-center items-center pt-2">
                      <h1 className="text-center font-semibold text-lg">
                        Contact Our Address
                      </h1>
                    </div>
                    <div className="flex justify-center items-center pt-2">
                      <p className="text-center text-sm">
                        {" "}
                        415, Grand Avenue Road, Churchill Street, Chicago, USA
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-[#f4f4f4] h-32 lg:w-3/4 w-full rounded">
                    <div className="flex justify-center items-center pt-4">
                      <IoMdMailUnread className="w-8 h-8" />
                    </div>
                    <div className="flex justify-center items-center pt-2">
                      <h1 className="text-center font-semibold text-lg">
                        Contact Our Address
                      </h1>
                    </div>
                    <div className="flex justify-center items-center pt-2">
                      <p className="text-center text-sm">
                        {" "}
                        415, Grand Avenue Road, Churchill Street, Chicago, USA
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-[#f4f4f4] h-32 lg:w-3/4 w-full rounded">
                    <div className="flex justify-center items-center pt-4">
                      <BsFillTelephoneFill className="w-8 h-8" />
                    </div>
                    <div className="flex justify-center items-center pt-2">
                      <h1 className="text-center font-semibold text-lg">
                        Contact Our Address
                      </h1>
                    </div>
                    <div className="flex justify-center items-center pt-2">
                      <p className="text-center text-sm">
                        {" "}
                        415, Grand Avenue Road, Churchill Street, Chicago, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form action="" method="POST" className="mt-2">
                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Subject
                      </label>
                      <input
                        required
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Message
                      </label>
                      <textarea
                        required
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-normal text-[#6B7280] outline-none  focus:shadow-md"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center ">
                    <div className=" md:w-8/12 w-full flex md:justify-start justify-center items-center">
                      <a
                        href="/"
                        className="relative bg-[#212529] text-white inline-flex items-center justify-center py-2 px-8 overflow-hidden font-medium transition duration-1000 ease-out rounded-full group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 bg-[#212529] -translate-x-full group-hover:translate-x-0 ease-in-out">
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
                          Submit
                        </span>
                        <span className="relative invisible">Button Text</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="md:pt-16 pt-8 pb-6">
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
  );
};

export default ContactOne;
