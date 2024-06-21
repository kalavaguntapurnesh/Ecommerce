import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const ContactModal = ({ isVisible, onClose }) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xs flex justify-center items-center z-20"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="flex flex-col items-center justify-center bg-white rounded-xl ">
        <button
          className="text-black text-xl place-self-end mr-3 mt-2 p-1"
          onClick={() => onClose()}
        >
          <MdOutlineCancel />
        </button>
        <div className="flex flex-col items-center justify-center px-6 mx-auto">
          <div className="w-full bg-white dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-2 sm:p-8">
              <div>
                <h1 className="text-lg md:text-xl text-center font-semibold dark:text-white">
                  Contact us through below ways
                </h1>
              </div>

              <div className="flex flex-col justify-center items-center mb-4 py-4">
                <div className="p-4 rounded-full bg-red-500/20 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-red-600"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D41F30"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <circle cx="12" cy="10" r="2"></circle>
                    <line x1="8" x2="8" y1="2" y2="4"></line>
                    <line x1="16" x2="16" y1="2" y2="4"></line>
                  </svg>
                </div>
                <p className="text-sm md:text-lg font-bold mt-4 text-center">
                  Mail us at:{" "}
                  <a
                    href="mailto:hello@takeuforward.org"
                    className="text-red-600"
                  >
                    hello@clouddatanetworks.com
                  </a>
                </p>
                <p className="mt-2 text-sm">or</p>

                <div className="pt-4">
                  <a
                    href="/contact"
                    className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-semibold text-white bg-black transition duration-1000 ease-out rounded-full group"
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
                    <span className="absolute flex items-center justify-center w-full h-full text-sm transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">
                      Fill the form
                    </span>
                    <span className="relative invisible">Button Text</span>
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

export default ContactModal;
