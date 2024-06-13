import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ImSad } from "react-icons/im";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 pb-8 h-[100vh]">
        <div className="flex justify-center items-center">
          <ImSad className="w-20 h-20 text-gray-800" />
        </div>
        <div>
          <h1 className="text-center  pt-8">
            There is nothing in your bag. Lets add some items.
          </h1>
        </div>
        <div className="my-4 flex justify-center items-center">
          <a
            href="/"
            className="bg-gray-800 text-white text-center transition duration-1000 ease-in-out font-medium px-8 py-3"
          >
            Continue Shopping
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
