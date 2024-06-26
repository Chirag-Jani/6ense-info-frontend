import SlideMobile from "./SlideMobile";
import SliderSlick from "./SliderSlick";

const Roadmap = () => {
  const slideData = [
    {
      title: "2017",
      heading: "Foundation of Plantomatic:",
      des: "The first company, Plantomatic®, was established.",
      heading1: "",
      des1: "",
      src: "bottom-14",
      src1: "flex flex-col-reverse",
      src2: "-mb-3 ",
    },
    {
      title: "2018 - 2024",
      heading: "Completion of the Cannabis Supply Chain:",
      des: "Over these years, the entire pharmaceutical cannabis supply chain was completed from seed to products .",
      heading1: "",
      des1: "",
      src: "top-14",
      src1: "flex flex-col",
      src2: "-mt-3",
    },
    {
      title: "December 2023",
      heading: "Initial Token and NFT Presale:",
      des: "The first presale of tokens and NFTs took place.",
      heading1: "",
      des1: "",
      src: "bottom-14",
      src1: "flex flex-col-reverse",
      src2: "-mb-3 ",
    },
    {
      title: "June 19, 2024",
      heading: "Continuation of the Campaign: ",
      des: "The campaign will continue, with new updates being published.",
      heading1: "First Contact with 6ense DeX: ",
      des1: "Introduction of 6ense DeX, which will be fully functional by August 1, 2024.",
      src: "top-14",
      src1: "flex flex-col",
      src2: "-mt-3",
    },

    {
      title: "August 1, 2024",
      heading: "Full Functionality of 6ense DeX:",
      des: "6ense DeX will be available with all its features.",
      heading1: "",
      des1: "",
      src: "bottom-14",
      src1: "flex flex-col-reverse",
      src2: "-mb-3 ",
    },
    {
      title: "September 11, 2024",
      heading: "Listing on Markets",
      des: "The token will be listed on various markets, in addition to our DeX.",
      heading1: "",
      des1: "",
      src: "top-14",
      src1: "flex flex-col",
      src2: "-mt-3",
    },
    {
      title: "December 2024",
      heading: "Publication of 6ense Blockchain Testnet:",
      des: "Launch of the testnet for the 6ense blockchain.",
      heading1: "",
      des1: "",
      src: "bottom-14",
      src1: "flex flex-col-reverse",
      src2: "-mb-3 ",
    },
    {
      title: "March 29, 2025",
      heading: "Mainnet Launch:",
      des: "The 6ense blockchain will be launched on the mainnet.",
      heading1: "",
      des1: "",
      src: "top-14",
      src1: "flex flex-col",
      src2: "-mt-3",
    },
    {
      title: "2025",
      heading: "Completion of 6ense Development:",
      des: "Ongoing development as per the plan for the complete realization of 6ense.",
      heading1: "User Proposals:",
      des1: "Acceptance of user proposals for network functionality.",
      src: "bottom-14",
      src1: "flex flex-col-reverse",
      src2: "-mb-3 ",
    },
  ];
  return (
    <div className="max-w-[1280px] w-full mx-auto py-10 ">
      <div className="pb-10 px-3">
        <h1 className="text-center text-3xl font-bold capitalize py-1">
          Roadmap
        </h1>
        <h3 className=" text-center font-medium text-base textBlack py-1 max-w-[800px] mx-auto">
          Here is the roadmap highlighting the key milestones for 6ense
        </h3>
      </div>

      <div className="md:hidden max-w-[1152px] px-2 sm:px-10 md:px-20 mx-auto ">
        <SlideMobile slideData={slideData} />
      </div>
      <div className=" hidden md:flex max-w-[1152px] px-2 sm:px-10 md:px-20 mx-auto">
        <SliderSlick slideData={slideData} />
      </div>
      <div className="">
        <p className="text-center font-medium text-base textBlack py-1 max-w-[800px] mx-auto">
          Roadmap provides a clear timeline of milestones, from the inception of
          the initial company to the development and full deployment of the
          6ense Blockchain, DeX, Ecosystem.
        </p>
      </div>
    </div>
  );
};

export default Roadmap;
