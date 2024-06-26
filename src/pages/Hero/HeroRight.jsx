import { useState, useEffect } from "react";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { FaEthereum, FaHandHoldingUsd, FaRegCreditCard } from "react-icons/fa";
import Button from "../../components/global/Button";
import osImg from "../../utils/images/osImg.png";
import { ethers } from "ethers";
import { abi as TokenSaleAbi } from "../../contracts/TokenSale.json";
import { abi as TetherUSdtAbi } from "../../contracts/USDTToken.json";

const HeroRight = () => {
  const [activate, setActivate] = useState("ETH");
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [usdtAmount, setUsdtAmount] = useState("");
  const [SixensetokenAmount, setSixensetokenAmount] = useState("");
  const [ethAmount, setEthAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [ethAmountError, setEthAmountError] = useState("");
  const [USDTAmountError, setUSDTAmountError] = useState("");
  const [ethBalance, setEthBalance] = useState(0);
  const [usdtBalance, setUSDTBalance] = useState(0);
  const [usdtTrxHash, setusdtTrxHash] = useState(0);
  const [EtherTrxHash, setEtherTrxHash] = useState(0);
  const [activeChain, setactiveChain] = useState("");

  const contractAddressETH = "0xe14F2e37935A7b500CeF56D2779FFeCa79F0bf65";
  const contractAddressBSC = "";
  const USDTContractEthereum = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const USDTContractBNB = "0x55d398326f99059fF775485246999027B3197955";

  const connectMetaMask = async () => {
    try {
      if (window.ethereum) {
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });

        // Check if connected to Ethereum mainnet (chainId 0x1)
        if (chainId !== "0x1") {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x1" }],
          });
        }

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setConnectedAccount(account); // Set the connected account
      } else {
        console.error("MetaMask is not installed or not available");
        alert("Please install MetaMask to connect your wallet");
      }
    } catch (error) {
      if (error.code === 4001) {
        console.error("User rejected the request.");
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  const fetchEthBalance = async () => {
    try {
      if (connectedAccount) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(connectedAccount);
        const formattedBalance = ethers.utils.formatEther(balance);
        console.log("ETH balance:", formattedBalance);
        setEthBalance(parseFloat(formattedBalance));
      }
    } catch (error) {
      console.error("Error fetching ETH balance:", error);
    }
  };

  const getChainId = async () => {
    const chainId = await window.ethereum // Or window.ethereum if you don't support EIP-6963.
      .request({ method: "eth_chainId" });
    setactiveChain(chainId);
    if (chainId !== "0x1" && chainId !== "0x38") {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
      window.location.reload();
    }
  };

  useEffect(() => {
    fetchEthBalance();
    fetchUSDTBalance();
  }, [connectedAccount]);

  useEffect(() => {
    getChainId();
  }, []);

  const fetchUSDTBalance = async () => {
    try {
      if (connectedAccount) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let contractAddress =
          activeChain === "0x1" ? USDTContractEthereum : USDTContractBNB;
        const contract = new ethers.Contract(
          contractAddress,
          TetherUSdtAbi,
          provider
        );
        const balance = await contract.balanceOf(connectedAccount);
        const formattedBalance = ethers.utils.formatUnits(balance, 6);
        console.log("USDT balance:", formattedBalance);
        setUSDTBalance(parseFloat(formattedBalance));
      }
    } catch (error) {
      console.error("Error fetching USDT balance:", error);
    }
  };

  const Buy6osfromETH = async () => {
    try {
      if (!connectedAccount) {
        alert("Please connect your wallet first.");
        return;
      }

      if (!ethAmount || isNaN(ethAmount)) {
        setEthAmountError("Please enter a valid amount.");
        return;
      } else {
        setEthAmountError("");
      }

      // Check if enough ETH balance is available
      if (parseFloat(ethBalance) < parseFloat(ethAmount)) {
        console.log("Insufficient balance to perform transaction.");
        alert("You do not have enough funds to buy tokens.");
        return;
      }

      // Initialize provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let selectedMainContract;
      if (activeChain === "0x1") {
        selectedMainContract = contractAddressETH;
      } else {
        selectedMainContract = contractAddressBSC;
      }
      const contract = new ethers.Contract(
        selectedMainContract,
        TokenSaleAbi,
        signer
      );

      // Estimate gas limit
      const gasLimit = await contract.estimateGas.buyTokensWithEth({
        value: ethers.utils.parseEther(ethAmount),
      });
      console.log("Estimated Gas Limit:", gasLimit.toString());

      // Fetch gas price
      const gasPrice = await provider.getGasPrice();
      console.log("Gas Price:", gasPrice.toString());

      // Send transaction
      const tx = await contract.buyTokensWithEth({
        value: ethers.utils.parseEther(ethAmount),
        gasLimit: gasLimit,
        gasPrice: gasPrice,
      });

      const receipt = await tx.wait();
      console.log("Transaction successful:", receipt);

      const transactionHash = receipt.transactionHash;
      console.log("Transaction Hash:", transactionHash);

      setEtherTrxHash(transactionHash);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  const Buy6osfromUSDT = async () => {
    try {
      // Ensure wallet is connected and authorized
      if (!connectedAccount) {
        alert("Please connect your wallet first.");
        return;
      }

      // Ensure USDT amount is provided and valid
      if (!usdtAmount || isNaN(usdtAmount)) {
        setUSDTAmountError("Please enter a valid amount of USDT.");
        return;
      } else {
        setUSDTAmountError("");
      }

      // Check if enough USDT balance is available
      if (parseFloat(usdtBalance) < parseFloat(usdtAmount)) {
        console.log("Insufficient USDT balance to perform transaction.");
        alert("You do not have enough USDT to buy tokens.");
        return;
      }

      // Convert usdtAmount to Wei
      const usdtWeiAmount = ethers.utils.parseUnits(usdtAmount, 6);

      // Initialize provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let selectedContractAddress;
      let selectedMainContract;
      if (activeChain === "0x1") {
        selectedMainContract = contractAddressETH;
        selectedContractAddress = USDTContractEthereum;
      } else {
        selectedContractAddress = USDTContractBNB;
        selectedMainContract = contractAddressBSC;
      }

      // Approve the contract to spend USDT on behalf of the user
      const usdtContract = new ethers.Contract(
        selectedContractAddress,
        TetherUSdtAbi,
        signer
      );
      const allowance = await usdtContract.allowance(
        connectedAccount,
        selectedMainContract
      );

      if (allowance.lt(usdtWeiAmount)) {
        const approveTx = await usdtContract.approve(
          selectedMainContract,
          usdtWeiAmount
        );
        await approveTx.wait();
      }

      // Execute the transaction
      const contract = new ethers.Contract(
        selectedMainContract,
        TokenSaleAbi,
        signer
      );
      const gasLimit = await contract.estimateGas.buyTokensWithUSDT(
        usdtWeiAmount
      );
      console.log("Estimated Gas Limit:", gasLimit.toString());

      const gasPrice = await provider.getGasPrice();
      console.log("Gas Price:", gasPrice.toString());

      const tx = await contract.buyTokensWithUSDT(usdtWeiAmount, {
        gasLimit: gasLimit,
        gasPrice: gasPrice,
      });

      const receipt = await tx.wait();
      console.log("Transaction successful:", receipt);

      const transactionHash = receipt.transactionHash;
      console.log("Transaction Hash:", transactionHash);

      setusdtTrxHash(transactionHash);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };
  // Function to handle changes in USDT input
  const handleUsdtInputChange = (event) => {
    const amount = event.target.value;
    setUsdtAmount(amount);
    if (amount !== "") {
      const calculatedTokenAmount = amount * 1000; // Convert USDT to 6ENSE
      setSixensetokenAmount(calculatedTokenAmount.toFixed(2)); // Round to 2 decimal places
    } else {
      setSixensetokenAmount("");
    }
  };

  // Function to handle changes in ETH input
  const handleEthInputChange = (event) => {
    const amount = event.target.value;
    setEthAmount(amount);
    if (amount !== "") {
      if (activeChain === "0x1") {
        const calculatedTokenAmount = (amount * 3294.43) / 0.001; // Convert ETH to 6ENSE
        setTokenAmount(calculatedTokenAmount.toFixed(4)); // Round to 2 decimal places
      } else {
        const calculatedTokenAmount = (amount * 564.86) / 0.001; // Convert BNB to 6ENSE
        setTokenAmount(calculatedTokenAmount.toFixed(4)); // Round to 2 decimal places
      }
    } else {
      setTokenAmount("");
    }
  };

  // Function to get truncated wallet address
  const getTruncatedAddress = (address) => {
    if (!address) return "";
    const start = address.substring(0, 6); // Get first 6 characters
    const end = address.substring(address.length - 4); // Get last 4 characters
    return `${start}...${end}`;
  };

  const switchActiveChain = async (chainId) => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }],
      });
      window.location.reload();
    } catch (switchError) {
      if (switchError.code === 4902) {
        // You can make a request to add the chain to wallet here
        console.log("Error", switchError);
        alert("Please add the Selected Chain in your MetaMask");
      }
      alert("Error Switching Chain!");
    }
  };

  // Render conversion rate message
  // const renderConversionRateOfEth = () => {
  //   return (
  //     <div className="text-center py-2">
  //       1 60s = 0.0000046 ETH
  //     </div>
  //   );
  // };

  // const renderConversionRateofUsdt = () => {
  //   return (
  //     <div className="text-center py-2">
  //       1 60s = $0.016
  //     </div>
  //   );
  // };
  //

  return (
    <div className="border-2 max-w-[440px] w-full border-[#6254ff] rounded-3xl p-2 pb-6 sm:p-4 lg:p-6">
      <div className="py-4">
        <h1 className="text-center textBlack font-bold text-2xl">
          BUY NOW BEFORE FINAL LISTING!
        </h1>
      </div>
      <div className="py-4">
        <h1 className="text-center font-bold text-xl">Select Your Network: </h1>
      </div>
      <select
        name="chain"
        id="chain"
        className="flex items-center text-center m-auto w-100 p-3"
        style={{
          border: "1px solid",
          borderRadius: "5px",
        }}
        onChange={(e) => {
          switchActiveChain(e.target.value);
        }}
      >
        <option value="0x1" selected={activeChain === "0x1"}>
          Ethereum
        </option>
        <option value="0x38" selected={activeChain === "0x38"}>
          Binance Smart Chain
        </option>
      </select>
      <div className="py-6">
        <div className="flex items-center justify-around bgBlue textWhite rounded-3xl py-2 px-4">
          <div className="border-2 border-white p-1 rounded-full">
            <img src={osImg} alt="60S" className="w-6 h-6" />
          </div>
          <div>
            {" "}
            <p className="text-l">1 60S = $0.00093 EUR</p>
            {/* <p className="text-sm">(USD, ETH, EUR conversion todo)</p> */}
          </div>
          <div className="border-2 border-white p-1 rounded-full">
            <RiMoneyEuroCircleLine size={20} />
          </div>
        </div>
      </div>

      {/* <div className="py-2">
        <p className="text-base text-center font-medium textBlack">Click To Choose One</p>
      </div> */}

      <div className="py-4">
        <div className="flex items-center justify-center textWhite">
          <div className="rounded-lg py-1 px-1 flex items-center flex-wrap justify-center bg-gray-300 gap-1">
            <div
              className={`flex items-center flex-nowrap gap-x-1.5 uppercase py-2 px-3 rounded-md cursor-pointer ${
                activate === "ETH" ? "bgBlue" : "bgBlack"
              }`}
              onClick={() => setActivate("ETH")}
            >
              {activeChain === "0x1" ? (
                <>
                  <FaEthereum /> eth
                </>
              ) : (
                <>BNB</>
              )}
            </div>
            <div
              className={`flex items-center flex-nowrap gap-x-1.5 uppercase py-2 px-3 rounded-md bgBlack cursor-pointer ${
                activate === "USDT" ? "bgBlue" : "bgBlack"
              }`}
              onClick={() => setActivate("USDT")}
            >
              <FaHandHoldingUsd /> usdt
            </div>
            <div
              className={`flex items-center flex-nowrap gap-x-1.5 uppercase py-2 px-3 rounded-md bgBlack cursor-pointer ${
                activate === "CARD" ? "bgBlue" : "bgBlack"
              }`}
              // onClick={() => setActivate('CARD')}
              onClick={() => alert("Coming soon")}
            >
              <FaRegCreditCard />
              credit card
            </div>
          </div>
        </div>
        <div>
          {activate === "ETH" && (
            <div>
              <div className="py-8 flex flex-wrap sm:flex-nowrap items-center justify-center gap-4">
                <input
                  type="number"
                  value={ethAmount}
                  onChange={handleEthInputChange}
                  className="bg-gray-200 remove-arrow text-center max-w-[300px] py-0.5 px-2.5 rounded-2xl border border-[#101013] w-full"
                  placeholder="Amount n"
                />
                <input
                  type="number"
                  value={tokenAmount}
                  className="bg-gray-200 remove-arrow text-center max-w-[300px] py-0.5 px-2.5 rounded-2xl border border-[#101013] w-full"
                  placeholder={`6ENSE to Receive`}
                  disabled
                />
              </div>
              {ethAmountError && (
                <div className="py-2 text-red-500 text-center">
                  {ethAmountError}
                </div>
              )}
              <div className="py-1 flex justify-center items-center">
                <button
                  className="bg-gray-200 remove-arrow text-center max-w-[300px] py-0.5 px-2.5 rounded-2xl border border-[#101013] w-full cursor-pointer"
                  onClick={Buy6osfromETH}
                >
                  Buy With {activeChain === "0x1" ? "ETH" : "BNB"}
                </button>
              </div>
              <p className="my-2 font-semibold text-base text-center textBlack">
                Transaction Hash: {EtherTrxHash}
              </p>
            </div>
          )}
          {activate === "USDT" && (
            <div>
              <div className="py-8 flex flex-wrap sm:flex-nowrap items-center justify-center gap-4">
                <input
                  type="number"
                  value={usdtAmount}
                  onChange={handleUsdtInputChange}
                  className="bg-gray-200 remove-arrow text-center max-w-[300px] py-0.5 px-2.5 rounded-2xl border border-[#101013] w-full"
                  placeholder="Amount in USDT"
                />
                <input
                  type="number"
                  value={SixensetokenAmount}
                  className="bg-gray-200 remove-arrow text-center max-w-[300px] py-0.5 px-2.5 rounded-2xl border border-[#101013] w-full"
                  placeholder={`Equivalent 6ENSE tokens`}
                  disabled
                />
              </div>
              {USDTAmountError && (
                <div className="py-2 text-red-500 text-center">
                  {USDTAmountError}
                </div>
              )}
              <div className="py-2 flex justify-center items-center">
                <button
                  className="bg-gray-200 remove-arrow text-center max-w-[300px] py-0.5 px-2.5 rounded-2xl border border-[#101013] w-full cursor-pointer"
                  onClick={Buy6osfromUSDT}
                >
                  Buy With USDT
                </button>
              </div>
              <p className="my-2 font-semibold text-base text-center textBlack">
                Transaction Hash: {usdtTrxHash}
              </p>
            </div>
          )}
          {activate === "CARD" && (
            <div className="pt-9">
              <div className="py-1 flex justify-center items-center">
                <Button name={"Buy With Credit"} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="py-3 flex flex-wrap sm:flex-nowrap items-center justify-center gap-4">
        {connectedAccount ? (
          <p className="font-semibold text-base text-center textBlack">
            Connected: {getTruncatedAddress(connectedAccount)}
          </p>
        ) : (
          <button
            className="bg-gray-200 remove-arrow text-center max-w-[300px] py-0.5 px-2.5 rounded-2xl border border-[#101013] w-full cursor-pointer"
            onClick={connectMetaMask}
          >
            Connect Wallet
          </button>
        )}
      </div>

      <div>
        <p className="font-semibold text-base text-center textBlack">
          Powered By <span className="font-bold">6ENSE</span>
        </p>
      </div>
    </div>
  );
};

export default HeroRight;
