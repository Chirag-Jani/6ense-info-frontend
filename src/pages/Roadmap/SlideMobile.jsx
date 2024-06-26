import PropTypes from "prop-types";

const SlideMobile = ({ slideData }) => {
  return (
    <div className=" h-auto w-full pl-4  pr-2 ">
      <div className="flex relative">
        <div className=" border-2 border-[#6254ff] "></div>

        <div className=" pl-7 ">
          {slideData.map((item, index) => (
            <div
              key={index}
              className=" w-full my-4 flex items-center h-auto gap-9 rounded-xl bg-gray-200 border-2"
            >
              <div className="bg-[#6254ff] absolute  z-50 w-5 h-5 -left-2 rounded-full"></div>
              <div className="  full  py-2 px-2    ">
                <div className="flex ">
                  <div className=" flex justify-center items-center">
                    <div className="w-8 h-8 bg-gray-200 skew-y-12 -ml-4 -rotate-[50.5deg] "></div>
                  </div>

                  <div className="  z-10">
                    <h3 className="px-3 z-10  font-medium text-wrap pb-3 break-all">
                      {item.title}
                    </h3>
                    <div className="py-1">
                      <h1 className="px-3 z-10 font-semibold text-wrap break-all">
                        {item.heading}
                      </h1>
                      <p className="px-3 text-sm  text-wrap break-all ">
                        {item.des}
                      </p>
                    </div>
                    <div className="py-1">
                      <h1 className="px-3 z-10 font-semibold text-wrap break-all">
                        {item.heading1}
                      </h1>
                      <p className="px-3 text-sm  text-wrap break-all ">
                        {item.des1}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SlideMobile.propTypes = {
  slideData: PropTypes.any,
};

export default SlideMobile;
