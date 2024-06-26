import { useState } from "react";
import { Link } from "react-router-dom";
import LogoLetter6ense from "../../../utils/images/LogoLetter6ense.png";
import MainLogo6ense from "../../../utils/images/MainLogo6ense.png";
// import LogoM from "../../../utils/images/LogoM.png";

const Navbar = () => {
  const Navdata = [
    {
      name: "About Us",
      href: "https://www.6ense.it/",
      target: "_blank",
    },
    {
      name: "How To Buy",
      href: "howtobuy",
    },
    {
      name: "Token",
      href: "token",
    },
    {
      name: "Road Map",
      href: "roadmap",
    },

    {
      name: "Team",
      href: "https://www.6ense.it/",
      target: "_blank",
    },
    {
      name: "F.A.Q",
      href: "faq",
    },
    {
      name: "Contact Us",
      href: "contact",
    },
  ];

  const [show, setShow] = useState(true);

  const handleOpen = () => {
    setShow(!show);
  };

  return (
    <div className="w-full mx-auto border-b-[1.5px] bg-slate-100 border-slate-200 duration-200">
      <div className="max-w-[1480px] w-full mx-auto">
        <div className="w-full flex justify-between items-center px-1 sm:px-2 md:px-3 lg:px-5 relative">
          <div className="duration-200 text-[#101013]  bg-contain  overflow-hidden px-1 ">
            <Link to="/" className="flex justify-center items-center gap-x-2">
              <img src={MainLogo6ense} alt="" className=" w-10 " />
              <img src={LogoLetter6ense} alt="" className=" w-20  " />
            </Link>
          </div>
          <div className="">
            <ul
              className={`block absolute top-full left-0 md:relative ease-in-out duration-300 bg-gray-200 z-50 md:bg-gray-100 w-full md:flex justify-end items-center gap-0 ${
                show ? "hidden" : ""
              }`}
            >
              {Navdata.map((item, index) => (
                <li
                  className="block w-full hover:bg-gray-300 duration-300  md:hover:bg-gray-100"
                  key={index}
                >
                  <Link
                    to={item.href}
                    className="py-4   px-3 font-semibold text-base cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize block text-[#101013] text-nowrap"
                    target={item.target || "_self"}
                    rel={
                      item.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="py-4 px-3 lg:px-4 font-semibold text-base cursor-pointer hover:text-[#6254ff] ease-in duration-300 capitalize text-[#101013] flex flex-col gap-y-1  md:hidden "
              onClick={handleOpen}
            >
              <div className="w-6 h-[4px] bg-[#101013]"></div>
              <div className="w-6 h-[4px] bg-[#101013]"></div>
              <div className="w-6 h-[4px] bg-[#101013]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
