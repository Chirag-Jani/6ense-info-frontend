import { faqsData } from "./faqsDara.js";
import TextDetails from "./TextDetails.jsx";

const Faq = () => {
  return (
    <div className=" max-w-[1110px] mx-auto my-10 px-4">
      {/* <div className=" ">
        <h1 className=" text-center capitalize text-[#101013] text-2xl md:text-4xl font-extrabold py-4">
          Frequently Asked Questions
        </h1>
        <p className=" text-center text-sm md:text-base  text-[#6B7B9C] py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam,
          massa nec hendrerit laoreet.
        </p>
      </div> */}

      <div className="py-4">
        <h1 className="text-center text-3xl font-bold capitalize py-1">
          Frequently Asked Questions
        </h1>
        {/* <h3 className=" text-center font-medium text-base textBlack py-1 max-w-[800px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam,
          massa nec hendrerit laoreet.
        </h3> */}
      </div>
      {/* seecond part */}
      <div className="">
        {faqsData.map((item) => (
          <TextDetails key={item.id} data={item.title} des={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
