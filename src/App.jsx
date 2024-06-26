import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HowToBuy from "./pages/HowToBuy/index.jsx";
import Token from "./pages/Token/index.jsx";
import Roadmap from "./pages/Roadmap/index.jsx";
import Faq from "./pages/Faq/index.jsx";
import ContactUs from "./pages/ContactUs/index.jsx";

// import {}

function App() {
  return (
    <>
      <div className=" w-full h-auto mx-auto poppins">
        <div className="">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/howtobuy" element={<HowToBuy />} />
              <Route path="/token" element={<Token />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
