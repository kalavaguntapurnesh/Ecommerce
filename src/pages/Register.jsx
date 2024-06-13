import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <>
      <Navbar />

      <div className="relative md:pt-20 pt-32 ">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div>
                  <section className="my-8">
                    <div className="flex flex-col items-center justify-center px-6 mx-auto">
                      <div className="w-full bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                        <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
                          <h1 className="text-xl text-center font-semibold md:text-2xl dark:text-white">
                            Register to your account
                          </h1>
                          <form
                            className="space-y-3 md:space-y-4"
                            // onSubmit={handleSubmit}
                          >
                            <div className="grid grid-cols-1 gap-2">
                              <div>
                                <label
                                  htmlFor="firstName"
                                  className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                                >
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  name="firstName"
                                  id="firstName"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Your first name"
                                  required
                                  onChange={(e) => setFirstName(e.target.value)}
                                ></input>
                              </div>

                              <div>
                                <label
                                  htmlFor="lastName"
                                  className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  name="lastName"
                                  id="lastName"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Your last name"
                                  required="true"
                                  onChange={(e) => setLastName(e.target.value)}
                                ></input>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                              <div>
                                <label
                                  htmlFor="email"
                                  className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="Email"
                                  id="email"
                                  placeholder="name@domain.com"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required="true"
                                  onChange={(e) => setEmail(e.target.value)}
                                ></input>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                              >
                                password
                              </label>
                              <div className="flex flex-row">
                                <input
                                  type={type}
                                  name="password"
                                  value={password}
                                  id="password"
                                  placeholder="••••••••"
                                  // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
                                  title="Password must be within 8 to 12 characters containing alteast 1 uppercase, 1 lowercase, 1 number and a special character"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required="true"
                                  onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                <span
                                  onClick={handleToggle}
                                  className="cursor-pointer flex justify-center items-center"
                                >
                                  <Icon
                                    className="absolute mr-10 text-gray-500"
                                    icon={icon}
                                    size={20}
                                  ></Icon>
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="terms"
                                  aria-describedby="terms"
                                  type="checkbox"
                                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
                                  required
                                ></input>
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="terms"
                                  className="font-light text-gray-500 dark:text-gray-300"
                                >
                                  I accept the{" "}
                                  <a
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    href="/privacy"
                                  >
                                    Terms and Conditions
                                  </a>
                                </label>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="w-full text-white bg-black hover:bg-colorFour transition ease-in-out duration-1000 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                              Sign up
                            </button>
                            <div className="relative flex py-1 items-center">
                              <div className="flex-grow border-t border-gray-400"></div>
                              <span className="flex-shrink mx-4 text-gray-400 text-sm">
                                Or
                              </span>
                              <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                              Already have an account?{" "}
                              <a
                                href="/"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                              >
                                Login here
                              </a>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
