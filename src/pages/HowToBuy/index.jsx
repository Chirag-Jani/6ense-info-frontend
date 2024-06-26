import { FaEthereum, FaRegCreditCard } from "react-icons/fa";
// import { FaHandHoldingUsd } from "react-icons/fa";
import { SVGComponent } from "../../utils/SvgIcons";

const HowToBuy = () => {
  const buyData = [
    {
      heading: "Ethereum (ETH) ",
      title:
        " Using Ethereum for token purchases is a common choice due to its widespread use and acceptance in the blockchain community. Transactions are quick, secure, and transparent. Buyers can use their Ethereum wallets to directly transfer ETH in exchange for the tokens.",
      img: <FaEthereum size={28} />,
    },
    {
      heading: "USDT (ERC20) ",
      title:
        " Tether (USDT) is a stablecoin pegged to the US dollar, providing a stable value and minimizing volatility risks.     Using the ERC20 version of USDT ensures compatibility with the     Ethereum network, allowing for seamless integration with     Ethereum-based platforms and wallets.",
      // img: <FaHandHoldingUsd size={28} />,
      img: <SVGComponent width="28" height="28" />,
    },
    {
      heading: "Credit Card ",
      title:
        " For those who prefer traditional payment methods,  using a credit card offers a convenient and familiar option. This    method is especially appealing to users who may not have            cryptocurrency holdings. Credit card transactions are processed   through secure payment gateways, ensuring buyer protection and ease            of use.",
      img: <FaRegCreditCard size={28} />,
    },
  ];
  return (
    <div className="w-full py-10 ">
      <div className="pb-10 px-4">
        <h1 className="text-center text-3xl font-bold capitalize py-1">
          how to buy
        </h1>
        <h3 className=" text-center font-medium text-base textBlack py-1 max-w-[800px] mx-auto">
          When selling a token, buyers are provided with multiple payment
          options to facilitate the transaction. Here are three popular methods:
        </h3>
      </div>
      <div className="max-w-[1200px] w-full mx-auto grid  grid-cols-1 sm:grid-cols-2  px-4 lg:grid-cols-3 gap-5">
        {buyData.map((item, index) => (
          <div className="bg-gray-200 pb-6 px-4 rounded-xl" key={index}>
            <h3 className=" text-center font-semibold text-sm pt-5">
              {item.heading}
            </h3>
            <p className=" text-center text-sm font-medium py-4">
              {item.title}
            </p>
            <div className=" bgBlue w-12 h-12 mx-auto rounded-full flex justify-center textWhite items-center">
              {item.img}
            </div>
          </div>
        ))}
        {/* <div className="bg-gray-200 pb-6 px-4 rounded-xl">
          <p className=" text-center text-sm font-medium py-4">
            <span className=" font-semibold">1.Ethereum (ETH): </span>
            Using Ethereum for token purchases is a common choice due to its
            widespread use and acceptance in the blockchain community.
            Transactions are quick, secure, and transparent. Buyers can use
            their Ethereum wallets to directly transfer ETH in exchange for the
            tokens.
          </p>
          <div className=" bgBlue w-12 h-12 mx-auto rounded-full flex justify-center textWhite items-center">
            <FaEthereum size={28} />
          </div>
        </div>

        <div className="bg-gray-200 pb-6 px-4 rounded-xl">
          <p className=" text-center text-sm font-medium py-4 ">
            2.USDT (ERC20): Tether (USDT) is a stablecoin pegged to the US
            dollar, providing a stable value and minimizing volatility risks.
            Using the ERC20 version of USDT ensures compatibility with the
            Ethereum network, allowing for seamless integration with
            Ethereum-based platforms and wallets.
          </p>
          <div className=" bgBlue w-12 h-12 mx-auto rounded-full flex justify-center textWhite items-center">
            <FaHandHoldingUsd size={28} />
          </div>
        </div>

        <div className="bg-gray-200 pb-6 px-4 rounded-xl">
          <p className=" text-center text-sm font-medium py-4">
            3.Credit Card: For those who prefer traditional payment methods,
            using a credit card offers a convenient and familiar option. This
            method is especially appealing to users who may not have
            cryptocurrency holdings. Credit card transactions are processed
            through secure payment gateways, ensuring buyer protection and ease
            of use.
          </p>
          <div className=" bgBlue w-12 h-12 mx-auto rounded-full flex justify-center textWhite items-center">
            <FaRegCreditCard size={28} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HowToBuy;
