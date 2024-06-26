import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="  px-6 py-5 lg:px-12">
      <div className="pb-5">
        <h1 className=" text-2xl text-[#4c4c4c] text-center md:text-start font-bold uppercase py-1">
          Address
        </h1>
        <h3 className="  font-medium text-center md:text-start text-sm textBlack py-1 max-w-[800px] mx-auto">
          JUST ONE CALLS Address
        </h3>
      </div>
      <div className=" flex gap-3 sm:gap-5 py-5 justify-start">
        <div className=" bgBlue w-8 h-8 sm:w-10 sm:h-10  rounded-full flex justify-center textWhite items-center cursor-pointer">
          <CiLocationOn size={20} />
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-[#4c4c4c]">Location</h1>
          <h3 className="text-sm font-medium text-[#5b5b5b]">
            Viale Parioli 73 , roma 00178 , Italia
          </h3>
        </div>
      </div>
      <div className=" flex gap-3 sm:gap-5  py-5 justify-start">
        <div className=" bgBlue w-8 h-8 sm:w-10 sm:h-10  rounded-full flex justify-center textWhite items-center cursor-pointer">
          <CiMail size={20} />
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-[#4c4c4c]">Mail</h1>
          <h3 className="text-sm font-medium text-[#5b5b5b]">
            plantogroup@gmail.com
          </h3>
        </div>
      </div>
      <div className=" flex gap-3 sm:gap-5  py-5 justify-start">
        <div className=" bgBlue  w-8 h-8 sm:w-10 sm:h-10  rounded-full flex justify-center textWhite items-center cursor-pointer">
          <FiPhoneCall size={20} />
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-[#4c4c4c]">Contact</h1>

          <a
            className="text-sm font-medium text-[#5b5b5b] underline"
            href="https://www.6ense.it/"
            target="_blank"
          >
            6ense.it
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
