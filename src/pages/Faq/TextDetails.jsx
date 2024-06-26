import PropTypes from "prop-types";

import { FaChevronDown } from "react-icons/fa";

import { useState } from "react";

const TextDetails = ({ data, des }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className=" flex justify-center  flex-col mt-6">
        <div
          className=" bg-gray-200 flex justify-between items-center rounded-md md:rounded-lg text-[#272847] font-semibold py-4 px-4"
          onClick={() => setShow(!show)}
        >
          <h3 className="text-sm md:text-lg text-[#101013] font-semibold uppercase ">
            {data}
          </h3>

          <div className="flex justify-center items-center  ">
            <div
              className={` bgBlue w-6  sm:w-8 h-6 sm:h-8 size-16 sm:size-20 mx-auto rounded-full flex justify-center textWhite items-center shadow-sm ${
                show ? "" : "rotate-180"
              } `}
            >
              <FaChevronDown />
            </div>
          </div>
        </div>
        <div className=" ">
          {show ? (
            ""
          ) : (
            <p className=" pl-5 pt-2 pr-4 text-[#101013] text-sm font-medium ">
              {des}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default TextDetails;

TextDetails.propTypes = {
  data: PropTypes.string,
  des: PropTypes.string,
  // key: PropTypes.number,
};
