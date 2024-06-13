import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Designer from "./pages/Designer";
import About from "./pages/About";
import BulkEnquiry from "./pages/BulkEnquiry";
import Cricket from "./pages/Cricket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/bulk-enquiry" element={<BulkEnquiry />}></Route>
        <Route path="/designer" element={<Designer />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cricket-kit" element={<Cricket />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
