import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeroLeft = () => {
  return (
    <div className="max-w-[440px] md:max-w-[580px] px-2 w-full ">
      <div className=" flex gap-x-3 text-4xl capitalize py-4 flex-wrap">
        <h1 className="textBlack font-semibold">PRESALE</h1>
        <h1 className="textBlue font-bold text-nowrap"> 6OS TOKEN</h1>
      </div>
      <div className=" py-4">
        <p className=" text-base textBlack">
          6ENSE is everywhere. The 6ENSE Ecosystem overturning the concept of
          work, well-being and digitization through the real economy integrated
          into digital processes. We were born from seed.
        </p>
      </div>
      <div className=" flex items-center flex-wrap gap-4 py-4">
        <button className="bgBlue textWhite border-[2px] w-16 h-16 rounded-full  border-[#5f51ff] flex justify-center items-center">
          <FaPlay size={24} />
        </button>

        <div className="flex items-center  gap-4 py-2">
          <Link
            to="https://www.6ense.net/_files/ugd/335324_d671565802af4a19b799360f39927761.pdf"
            target="_blank"
          >
            <button className="bgBlack  py-2.5 px-4 rounded-full font-semibold capitalize  border-[#5f51ff] textWhite border-[1px] flex justify-center items-center">
              Whitepaper
            </button>
          </Link>
          <Link
            to="https://www.6ense.net/_files/ugd/335324_d671565802af4a19b799360f39927761.pdf"
            target="_blank"
          >
            <button className="bgBlack  py-2.5 px-4 rounded-full font-semibold capitalize  border-[#5f51ff] textWhite border-[1px] flex justify-center items-center">
              View Audit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
