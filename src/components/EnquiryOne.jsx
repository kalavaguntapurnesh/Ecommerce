import React from "react";

const EnquiryOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-8">
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
                contact us for bulk orders & enquiry
              </h1>
            </div>

            <form action="" method="POST" className="mt-8">
              <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="flex justify-center items-center">
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
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="flex justify-start items-center">
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

                <div className="flex justify-center items-center">
                  <div className="mb-5 md:w-10/12 w-full">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Team / Academy Name
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

                <div className="flex justify-start items-center">
                  <div className="mb-5 md:w-10/12 w-full">
                    <label
                      htmlFor="address"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Address
                    </label>
                    <input
                      required
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter your address"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div className="mb-5 md:w-10/12 w-full">
                    <label
                      htmlFor="phoneNumber"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Phone Number
                    </label>
                    <input
                      required
                      type="text"
                      name="phoneNumber"
                      id="naphoneNumberme"
                      placeholder="Your Phone Number"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="flex justify-start items-center">
                  <div className="mb-5 md:w-10/12 w-full">
                    <label
                      htmlFor="country"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Country
                    </label>
                    <input
                      required
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Your Country"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center">
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
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-start items-center">
                  <div className="mb-5 md:w-10/12 w-full">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Products Interested In
                    </label>

                    <div className="grid grid-cols-4 gap-4">
                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-checkbox"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Playing Jersey
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-checkbox"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Playing Trouser
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-checkbox"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Cricket Jersey
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-checkbox"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Travel Polo
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-checkbox"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Travel Jacket
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-checkbox"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Cap / Clads
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-checkbox"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Hats
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center pt-8">
                <a
                  href="/careers"
                  className="relative bg-black text-white inline-flex items-center justify-center py-2 px-16 overflow-hidden font-semibold text-companyColor transition duration-1000 ease-out rounded-full group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white bg-black duration-300 -translate-x-full bg-companyColor group-hover:translate-x-0 ease-in-out">
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
                    Submit &#8594;
                  </span>
                  <span className="relative invisible">Button Text</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryOne;
