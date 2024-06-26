import DonutChart from "./DonutChart";

const Token = () => {
  const ChartData = [
    {
      id: 1,
      title: "5% Creator:",
      des: " A small percentage is allocated to the creator of the project as recognition for the initial ideation and development.",
      bgColor: "#008FFB",
    },

    {
      id: 2,
      title: "10% Marketing:",
      des: " These funds will be used to promote the project, increase visibility, and attract new users and investors.",
      bgColor: "#58FFC5",
    },
    {
      id: 3,
      title: "10% Catalyst Network:",
      des: " Allocated for strategic collaborations and initiatives with Catalyst Network to enhance infrastructure and the ecosystem.",
      bgColor: "#FEB019",
    },
    {
      id: 4,
      title: "10% Team:",
      des: " This percentage is reserved for the team working on the project, to reward their efforts and incentivize further developments and improvements.",
      bgColor: "#FF4560",
    },
    {
      id: 5,
      title: "25% DeX Liquidity:",
      des: " A significant portion of the tokens is allocated for liquidity on decentralized exchanges (DeX), ensuring ease of trading and market stability.",
      bgColor: "#775DD0",
    },
    {
      id: 6,
      title: "10% Future Allocation and Special Projects:",
      des: " These funds are reserved for future project needs and special initiatives that may arise, providing flexibility to adapt to new opportunities.",
      bgColor: "#67bbf7",
    },
    {
      id: 7,
      title: "20% Rewards:",
      des: " A substantial percentage is dedicated to user rewards, incentivizing active participation and continuous support for the project.",
      bgColor: "#58FFC5",
    },
  ];
  return (
    <div className="w-full py-10 ">
      <div className="pb-10 px-4">
        <h1 className="text-center text-3xl font-bold capitalize py-1">
          Tokenomics description for our project
        </h1>
        <h3 className=" text-center font-medium text-base textBlack py-1 max-w-[800px] mx-auto">
          The token distribution has been designed to ensure sustainable growth
          and incentivize all participants in our ecosystem. The tokenomics are
          as follows:
        </h3>
      </div>

      <div className=" max-w-[865px] w-full mx-auto px-4">
        <DonutChart />
      </div>
      <div className="pt-4 px-4">
        {ChartData.map((item) => (
          <div
            className=" my-2 max-w-[965px] mx-auto px-4 py-2 rounded-xl   shadow-sm"
            style={{ border: `2px solid ${item.bgColor}` }}
            key={item.id}
          >
            <h2 className=" font-semibold text-sm">{item.title}</h2>
            <h3 className="  font-medium text-xs sm:text-sm textBlack py-1 ">
              {item.des}
            </h3>
          </div>
        ))}
      </div>
      <div className="pt-4 px-4">
        <h3 className=" text-center font-medium text-base textBlack py-1 max-w-[800px] mx-auto">
          This distribution has been carefully designed to balance immediate
          needs with the long-term growth of the project, ensuring that all
          stakeholders are adequately incentivized and supported.
        </h3>
      </div>
    </div>
  );
};

export default Token;
