import { Link } from "react-router-dom";
import MainLogo6ense from "../../utils/images/MainLogo6ense.png";
import LogoLetter6ense from "../../utils/images/LogoLetter6ense.png";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const socialIcon = [
  // {
  //   icon: <FaLinkedin size={24} />,
  //   link: "",
  // },
  // {
  //   icon: <FaTwitter size={24} />,
  //   link: "",
  // },
  {
    icon: <FaInstagram size={24} />,
    link: "https://www.instagram.com/6ense.official/?igsh=c3F2djhoNm1nZjF3",
  },
  {
    icon: <FaFacebookF size={22} />,
    link: "https://www.facebook.com/profile.php?id=61560660062554",
  },
  // {
  //   icon: <FaYoutube size={24} />,
  //   link: "",
  // },
];

const BottomFooter = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto max-w-[1480px] w-full  px-2 md:px-8 flex flex-col md:flex-row justify-between items-center py-4 md:py-6 bg-lightBlue ">
        {/* <div className="duration-200 text-[#101013] ">
          <h1 className="font-bold text-3xl pb-2 px-2">6ENSE</h1>
        </div> */}
        <div className="duration-200 text-[#101013]  bg-contain  overflow-hidden px-1 ">
          <Link to="/" className="flex justify-center items-center gap-x-2">
            <img src={LogoLetter6ense} alt="" className=" w-20  " />
            <img src={MainLogo6ense} alt="" className=" w-10 " />
          </Link>
        </div>

        <div className="flex justify-start px-2 md:px-8 gap-x-4">
          {socialIcon.map((icon, index) => (
            <Link
              to={icon.link}
              target="_blank"
              key={index}
              className="text-lg text-black hover:text-[#6254ff] hover:bg-gray-200  p-1 rounded-lg  cursor-pointer ease-in duration-300"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 flex-col-reverse md:flex-row justify-end gap-x-16 gap-y-5 mt-5 md:mt-0">
          <Link to="/" className=" cursor-pointer">
            © 2013-2025 6ENSE Inc.
          </Link>
          <div className="flex justify-end flex-wrap gap-x-16">
            <Link to="/" className=" cursor-pointer">
              Login
            </Link>
            <Link to="/" className=" cursor-pointer">
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
