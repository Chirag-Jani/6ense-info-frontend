import { useRef, useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import PropTypes from "prop-types";

const SliderSlick = ({ slideData }) => {
  const sliderRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth + 10 >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -256, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 256, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check

      return () => {
        if (sliderRef.current) {
          sliderRef.current.removeEventListener("scroll", checkScrollPosition);
        }
      };
    }
  }, []);

  return (
    <div className="relative w-full ">
      <div className="absolute top-0 z-10 -left-8 md:-left-12 h-full flex items-center ">
        <button
          onClick={scrollLeft}
          className={`text-white w-7 md:w-10 h-7 md:h-10 text-base md:text-xl flex justify-center items-center rotate-90 rounded-full focus:outline-none ${
            isAtStart ? "bg-gray-300 textBlack" : "bg-[#6254ff]"
          }`}
          // disabled={isAtStart}
        >
          <FaAngleDown />
        </button>
      </div>

      <div ref={sliderRef} className="flex overflow-x-auto scrollbar-hide  ">
        {slideData.map((item, index) => (
          <div
            key={index}
            className="flex-none relative w-64 min-h-screen py-2"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="bg-[#6254ff] z-20 w-5 h-5 relative rounded-full">
                <div
                  className={`absolute bg-gray-200 w-[245px] -left-[112.5px] rounded-xl ${item.src}`}
                >
                  <div className={item.src1}>
                    <div className="w-full flex justify-center">
                      <div
                        className={`w-8 h-8 bg-gray-200 skew-y-12 rotate-[39.5deg] ${item.src2}`}
                      ></div>
                    </div>
                    <h1 className="px-3 z-10 font-medium text-sm py-3">
                      {item.title}
                    </h1>

                    <h1 className="px-3 z-10 font-semibold">{item.heading}</h1>
                    <p className="px-3 text-sm py-1">{item.des}</p>
                    <h1 className="px-3 z-10 font-semibold">{item.heading1}</h1>
                    <p className="px-3 text-sm  py-2">{item.des1}</p>
                  </div>
                </div>
                <div className="absolute border-2 border-[#6254ff] w-[256px] opacity-30 -left-[116px] top-2.5"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 -right-8 md:-right-12 h-full flex items-center ">
        <button
          onClick={scrollRight}
          className={`text-white w-7 md:w-10 h-7 md:h-10 text-base md:text-xl rounded-full flex justify-center items-center -rotate-90 focus:outline-none ${
            isAtEnd ? "bg-gray-300 textBlack" : "bg-[#6254ff]"
          }`}
          // disabled={isAtEnd}
        >
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

SliderSlick.propTypes = {
  slideData: PropTypes.any,
};

export default SliderSlick;
