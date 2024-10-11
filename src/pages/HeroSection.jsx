import {
  Box,
  Container,
  Stack,
  Grid,
  Typography,
  Divider,
  Button,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";

import CountDownTimer from "../components/SmallComponents/Timer";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import {
  arrowIcon,
  bnbIcon,
  btcIcon,
  captainImg,
  ethIcon,
  heroBg,
  maticIcon,
  usdcIcon,
  usdtIcon,
} from "../components/SmallComponents/Images";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import {
  StyledInput,
  ToastNotify,
} from "../components/SmallComponents/AppComponents";
import {
  btcTokenAddress,
  ethTokenAddress,
  maticTokenAddress,
  presaleAddress,
  presaleReadFunction,
  presaleWriteFunction,
  tokenAddress,
  tokenReadFunction,
  tokenWriteFunction,
  usdcTokenAddress,
  usdtTokenAddress,
} from "../ConnectivityAssets";
import { formatUnits, parseEther, parseUnits } from "viem";
import Loading from "../components/SmallComponents/loading";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { AppContext } from "../utils/utils";
import { getBalance } from "@wagmi/core";
import { config } from "../utils/Web3ModalProvider";

import "./style.css";

const buttonDetails = [
  [
    {
      name: "BNB",
      value: "BNB",
      icon: bnbIcon,
    },
    {
      name: "ETH",
      value: "ETH",
      icon: ethIcon,
    },
    {
      name: "MATIC",
      value: "MATIC",
      icon: maticIcon,
    },
  ],

  [
    {
      name: "BTC",
      value: "BTC",
      icon: btcIcon,
    },
    {
      name: "USDT",
      value: "USDT",
      icon: usdtIcon,
    },

    {
      name: "USDC",
      value: "USDC",
      icon: usdcIcon,
    },
  ],
];

const calculatePercentageDifference = (firstPrice, nextPrice) => {
  if (firstPrice === 0) return 0;
  const percentageDifference = ((nextPrice - firstPrice) / firstPrice) * 100;
  return Number(parseFloat(percentageDifference).toFixed(0));
};

function HeroSection() {
  const { open } = useWeb3Modal();
  const { account } = useContext(AppContext);
  const matches = useMediaQuery("(max-width:1570px)");
  const matchesTwo = useMediaQuery("(max-width:1400px)");
  const matchesThree = useMediaQuery("(max-width:1300px)");
  const matchesFour = useMediaQuery("(max-width:1100px)");
  const matchesFive = useMediaQuery("(max-width:1050px)");

  const [progressBar, setProgressBar] = useState(0);
  const [amount, setAmount] = useState("");
  const [buyWith, setBuyWith] = useState("BNB");
  const [currentStage, setCurrentStage] = useState(0);
  const [bnbToToken, setBnbToToken] = useState(0);
  const [ethToToken, setEthToToken] = useState(0);
  const [maticToToken, setMaticToToken] = useState(0);
  const [btcToToken, setBtcToToken] = useState(0);
  const [usdtToToken, setUsdtToToken] = useState(0);
  const [recivedToken, setRecievedToken] = useState(0);
  const [userWalletBalance, setUserWalletBalance] = useState({
    BNB: 0,
    ETH: 0,
    MATIC: 0,
    USDT: 0,
    USDC: 0,
    BTC: 0,
  });
  const [currentStageTokenPrice, setCurrentStageTokenPrice] = useState(0);
  const [nextStageTokenPrice, setNextStageTokenPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentStageDetail, setCurrentStageDetail] = useState({
    sale: 0,
    total: 0,
  });
  const [overAllRaised, setOverAllRaised] = useState({
    sale: 0,
    total: 0,
  });

  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const showAlert = (message, severity = "error") => {
    setAlertState({
      open: true,
      message,
      severity,
    });
  };

  const handleMaxClick = (value) => {
    if (Number(value) % 1 !== 0) {
      setAmount(parseFloat(value).toFixed(3));
    } else {
      setAmount(parseFloat(value).toFixed(0));
    }
  };

  const raisedDetails = [
    {
      title: "Total USDT Raised:",
      spend: overAllRaised?.sale,
      total: overAllRaised?.total,
    },
    {
      title: `Phase ${currentStage + 1} USDT Raised:`,
      spend: currentStageDetail?.sale,
      total: currentStageDetail?.total,
    },
  ];
  const priceData = [
    {
      title: "Current Price",
      price: `$${Number(currentStageTokenPrice) > 0
        ? parseFloat(1 / Number(currentStageTokenPrice))?.toFixed(4)
        : "0.00"
        }`,
      selected: true,
    },
    {
      title: "Next Price",
      price: "0.006",
        // `$${Number(nextStageTokenPrice) > 0
        //   ? parseFloat(1 / Number(nextStageTokenPrice))?.toFixed(4)
        //   : "0.00"
        // }`,
      selected: false,
    },
  ];

  const handleAmountButtonClick = (value) => {
    setBuyWith(value);
  };

  const handleCopyClick = () => {
    try {
      navigator.clipboard.writeText("0xe90895B3f0EdFF3DFa7A4281B55C914a2D2166c6");
      showAlert("Address copied", "success");
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    const newValue = input?.replace(/[^0-9.]/g, "");
    setAmount(newValue);
  };

  const initVoidSigner = useCallback(async () => {
    try {
      const fetchTokenDecimals = async (address) => {
        const decimals = await tokenReadFunction(address, "decimals");
        return Number(decimals?.toString());
      };

      const fetchTokenConversion = async (method, args) => {
        const result = await presaleReadFunction(method, args);
        return Number(formatUnits(result?.toString(), dec));
      };

      const fetchStageData = async (stageIndex) => {
        const stageData = await presaleReadFunction("phases", [stageIndex]);
        const tokensToSellContract = await presaleReadFunction("tokensToSell", [
          stageIndex,
        ]);
        return {
          soldTokens: Number(formatUnits(stageData[2]?.toString(), dec)),
          tokensToSell: Number(
            formatUnits(tokensToSellContract?.toString(), dec)
          ),
        };
      };

      const [dec] = await Promise.all([fetchTokenDecimals(tokenAddress)]);

      const currentStage = Number(
        (await presaleReadFunction("currentStage")).toString()
      );

      const [
        bnbToTokenContract,
        ethToTokenContract,
        maticToTokenContract,
        btcToTokenContract,
        usdtToTokenContract,
        tokenPerUSDTContract,
        tokenPerUSDTNextContract,
        totalStagesRaw,
      ] = await Promise.all([
        fetchTokenConversion("nativeToToken", [parseEther("1"), currentStage]),
        fetchTokenConversion("ethToToken", [parseEther("1"), currentStage]),
        fetchTokenConversion("maticToToken", [parseEther("1"), currentStage]),
        fetchTokenConversion("btcToToken", [parseEther("1"), currentStage]),
        fetchTokenConversion("usdtToToken", [parseEther("1"), currentStage]),
        presaleReadFunction("phases", [currentStage]),
        presaleReadFunction("phases", [currentStage + 1]),
        presaleReadFunction("totalStages"),
      ]);

      const totalStages = Number(totalStagesRaw?.toString());

      let totalSoldToken = 0;
      let totalTokenToSell = 0;
      let currentStageTokenSell = 0;
      let currentStageSoldToken = 0;

      for (let i = 0; i < totalStages; i++) {
        const { soldTokens, tokensToSell } = await fetchStageData(i);

        if (i === currentStage) {
          currentStageTokenSell = tokensToSell;
          currentStageSoldToken = soldTokens;
        }

        totalTokenToSell += tokensToSell;
        totalSoldToken += soldTokens;
      }

      setCurrentStageDetail({
        sale: parseFloat(currentStageSoldToken / usdtToTokenContract).toFixed(
          0
        ),
        total: 50400,
        // parseFloat(currentStageTokenSell / usdtToTokenContract).toFixed(
        //   0
        // ),
      });
      setOverAllRaised({
        sale: parseFloat(totalSoldToken / usdtToTokenContract).toFixed(0),
        total: 252000,
        //  parseFloat(totalTokenToSell / usdtToTokenContract).toFixed(0),
      });

      setCurrentStage(currentStage);
      setBnbToToken(bnbToTokenContract);
      setEthToToken(ethToTokenContract);
      setMaticToToken(maticToTokenContract);
      setBtcToToken(btcToTokenContract);
      setUsdtToToken(usdtToTokenContract);
      setCurrentStageTokenPrice(
        Number(formatUnits(tokenPerUSDTContract[0]?.toString(), dec))
      );
      setNextStageTokenPrice(
        Number(formatUnits(tokenPerUSDTNextContract[0]?.toString(), dec))
      );
      setProgressBar(
        (Number(currentStageSoldToken) / Number(currentStageTokenSell)) * 100
      );
    } catch (e) {
      console.log("Error in initVoidSigner:", e);
    }
  }, []);

  useEffect(() => {
    initVoidSigner();
  }, [initVoidSigner]);

  const getBalanceToken = useCallback(
    async (address) => {
      try {
        const balance = await tokenReadFunction(address, "balanceOf", [
          account,
        ]);
        return formatUnits(balance?.toString(), 18);
      } catch (e) {
        console.log(e);
      }
    },
    [account]
  );

  const getUserWalletBalance = useCallback(async () => {
    try {
      const balance = await getBalance(config, {
        address: account,
      });
      const usdtBlance = await getBalanceToken(usdtTokenAddress);
      const usdcBlance = await getBalanceToken(usdcTokenAddress);
      const btcBlance = await getBalanceToken(btcTokenAddress);
      const maticBlance = await getBalanceToken(maticTokenAddress);
      const ethBlance = await getBalanceToken(ethTokenAddress);
      setUserWalletBalance({
        USDT: usdtBlance,
        USDC: usdcBlance,
        BTC: btcBlance,
        MATIC: maticBlance,
        ETH: ethBlance,
        BNB: balance?.formatted,
      });
    } catch (e) {
      console.log(e);
    }
  }, [account, getBalanceToken]);

  useEffect(() => {
    if (account) {
      getUserWalletBalance();
    }
  }, [account, getUserWalletBalance]);

  useEffect(() => {
    if (amount && +amount > 0) {
      if (buyWith === "USDT" || buyWith === "USDC") {
        let token = +usdtToToken * +amount;
        setRecievedToken(token?.toFixed(2));
      }
      if (buyWith === "BNB") {
        let token = +bnbToToken * +amount;
        setRecievedToken(token?.toFixed(2));
      }
      if (buyWith === "ETH") {
        let token = +ethToToken * +amount;
        setRecievedToken(token?.toFixed(2));
      }
      if (buyWith === "MATIC") {
        let token = +maticToToken * +amount;
        setRecievedToken(token?.toFixed(2));
      }
      if (buyWith === "BTC") {
        let token = +btcToToken * +amount;
        setRecievedToken(token?.toFixed(2));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyWith, amount]);

  const buyHandler = async () => {
    if (!account) {
      return showAlert("Error! Please connect your wallet");
    }
    if (!amount || +amount <= 0) {
      return showAlert("Error! Please enter an amount to buy.");
    }

    if (+amount > 5000) {
      return showAlert("Error! Maximum purchase amount is 5000.");
    }
    try {
      setLoading(true);

      const tokenData = {
        USDT: { address: usdtTokenAddress, buyFunction: "buyTokenUSDT" },
        USDC: { address: usdcTokenAddress, buyFunction: "buyTokenUSDC" },
        BTC: { address: btcTokenAddress, buyFunction: "buyTokenBtc" },
        MATIC: { address: maticTokenAddress, buyFunction: "buyTokenMatic" },
        ETH: { address: ethTokenAddress, buyFunction: "buyTokenEth" },
      };

      // const decimals = await Promise.all([
      //   tokenReadFunction(tokenAddress, "decimals"),
      //   ...Object.values(tokenData).map((token) =>
      //     tokenReadFunction(token.address, "decimals")
      //   ),
      // ]);

      // const [dec, ...tokenDecimals] = decimals;

      if (buyWith === "BNB") {
        await presaleWriteFunction(
          "buyToken",
          [],
          parseUnits(amount.toString(), 18).toString()
        );
      } else if (tokenData[buyWith]) {
        const token = tokenData[buyWith];
        // const tokenDec = tokenDecimals[Object.keys(tokenData).indexOf(buyWith)];
        await tokenWriteFunction(token.address, "approve", [
          presaleAddress,
          parseUnits(amount.toString(), 18).toString(),
        ]);

        await presaleWriteFunction(token.buyFunction, [
          parseUnits(amount.toString(), 18).toString(),
        ]);
      }

      setAmount("");
      setRecievedToken(0);
      initVoidSigner();
      showAlert("Transaction Confirmed", "success");
    } catch (e) {
      showAlert(e?.shortMessage || "An error occurred during the transaction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Loading loading={loading} />
      <Box
        sx={{
          // backgroundImage: `url(${heroBg})`,
          // backgroundSize: {
          //   xs: "130% 32%",
          //   md: matchesFive ? "130% 100%" : "100% 100%",
          // },
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: { xs: "top", md: "center" },
          // position: "relative",
          backgroundColor: "transparent",
          // boxShadow: "0px 4px 20px 0px #16161629",
        }}
      >
        <Box
          pt={2}
          sx={{
            display: { xs: "block", md: "none" },
            textAlign: "center",
          }}
        >
          {/* <Typography
            variant="h6"
            sx={{
              fontFamily: "Otomanopee One",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "17.38px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Exciting Play-to-Earn Fishing Game.
            <br /> Play, Explore, Enjoy, and Get Rich!
          </Typography> */}
        </Box>
        <Box
          mt={{ xs: 2, md: 5 }}
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: {
              xs: "10%",
              md: matchesFive
                ? "44%"
                : matchesFour
                  ? "38%"
                  : matchesThree
                    ? "32%"
                    : matchesTwo
                      ? "28%"
                      : matches
                        ? "22%"
                        : "16%",
            },
            right: {
              xs: "-16%",
              md: matchesFive
                ? "50%"
                : matchesFour
                  ? "40%"
                  : matchesThree
                    ? "37%"
                    : matchesTwo
                      ? "33%"
                      : matches
                        ? "35%"
                        : "40%",
            },
            width: { xs: "70%", md: "35%" },
          }}
        >
          {/* <Box
            component="img"
            src={captainImg}
            sx={{
              width: "100%",
              height: "100%",
            }}
          /> */}
        </Box>
        <Container maxWidth="xl">
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              // mt={{ xs: 9, md: 10 }}
              // px={{ xs: 0, md: matchesTwo ? 10 : matches ? 18 : 20 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                sx={{
                  border: "2px solid #FFFFFF",
                  width: { xs: "350px", md: "420px" },
                  borderRadius: "16px",
                  boxShadow: "0px 4px 20px 0px #16161629",
                  bgcolor: "#04263680",
                  px: 2,
                  pb: 2,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      width: "173px",
                      height: "35px",
                      padding: " 8px, 0, 8px, 0",
                      borderBottomLeftRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  >
                    <Typography
                      pt={1}
                      variant="body2"
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: "19.07px",
                        textAlign: "center",
                      }}
                    >
                      PHASE {currentStage + 1} OF 5 ENDS IN
                    </Typography>
                  </Box>
                </Box>
                <Stack
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CountDownTimer time={1729497747} />
                </Stack>
                <Box
                  mt={2}
                  sx={{
                    border: "1px solid #FFAE02",
                    bgcolor: "#16161680",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "14px",
                      fontWeight: 700,
                      lineHeight: "19.07px",
                      textAlign: "center",
                      color: "#FFAE02",
                    }}
                  >
                    NO NASTY TRICKS
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "16.34px",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    Our plan is precise. We stick to our schedule without
                    deviation, not even by a single day. In this, there are no
                    excuses.
                  </Typography>
                </Box>
                <Box
                  mt={1}
                  py={1}
                  sx={{
                    bgcolor: " #16161680",
                    borderRadius: "8px",
                    padding: "8px, 12px, 8px, 12px",
                  }}
                >
                  <Stack direction="column">
                    {raisedDetails.map(({ title, spend, total }, item) => (
                      <Stack
                        mt={item === 1 ? 1 : 0}
                        key={item + title}
                        direction="row"
                        sx={{
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="body2"
                          mr={1}
                          sx={{
                            fontFamily: "Open Sans",
                            fontSize: "13px",
                            fontWeight: 400,
                            lineHeight: "17.7px",
                            textAlign: "center",
                            color: " #FFFFFF",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="body2"
                          mr={0.4}
                          sx={{
                            fontFamily: "Open Sans",
                            fontSize: "13px",
                            fontWeight: 600,
                            lineHeight: "17.7px",
                            textAlign: "center",
                            color: " #FFFFFF",
                          }}
                        >
                          ${spend}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "Open Sans",
                            fontSize: "13px",
                            fontWeight: 400,
                            lineHeight: "17.7px",
                            textAlign: "center",
                            color: "#AEB9BC",
                          }}
                        >
                          /${total}
                        </Typography>
                      </Stack>
                    ))}
                    <Box
                      my={1}
                      mx={2.5}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Stack
                        mt={1}
                        sx={{
                          height: { xs: "16px", md: "16px" },
                          width: "100%",
                          boxShadow:
                            "5.091511249542236px 10.183022499084473px 15.274534225463867px 0px #00000080",
                          background: "#FFFFFF",
                          mt: 0.5,
                          borderRadius: "20px",
                          // border: "1px solid ",
                          overflow: "hidden",
                        }}
                      >
                        <Stack
                          height={"100%"}
                          alignItems={"start"}
                          justifyContent={"center"}
                          position={"relative"}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              // boxShadow:
                              //   "4.073208808898926px 4.073208808898926px 10.183022499084473px 0px #FFFFFFCC inset,0px 4.493834972381592px 9.986300468444824px 0px #A201274D",
                              left: 0,
                              top: 0,
                              bottom: 0,
                              width: `${progressBar}%`,
                              // borderRadius: "20px",
                              backgroundColor: "#00FF00",
                              // backgroundImage: `url(${loadingMain})`,
                              backgroundSize: "100% 100%",
                              backgroundRepeat: "no-repeat",
                              boxShadow: "0px 4px 4px 0px #00000040 inset",
                              zIndex: 0,
                              "&::after": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "100%",
                                width: "100%", // Wider than the container to allow animation
                                backgroundImage:
                                  "linear-gradient(135deg, transparent 25%, #16161666 25%,#16161666 50%, transparent 50%, transparent 75%, #16161666 75%, #16161666)",
                                backgroundSize: "20px 20px", // Adjust the size for the stripes
                                animation: "moveStripes 2s linear infinite",
                              },
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: 2.5,
                      }}
                    >
                      <Divider
                        orientation="horizontal"
                        sx={{
                          backgroundColor: "#FFFFFF",
                          height: "1px",
                          width: "100%",

                          opacity: 0.2,
                        }}
                      />
                    </Box>
                    <Box mt={1}>
                      <Stack
                        direction="row"
                        px={2.5}
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {priceData.map(({ title, price, selected }, index) => (
                          <Fragment key={index + title}>
                            {index === 1 && (
                              <Box mx={1}>
                                <Box component="img" src={arrowIcon} />
                              </Box>
                            )}
                            <Stack
                              direction="column"
                              gap={1}
                              sx={{
                                overflow: "hidden",
                                justifyContent: "center",
                                border: selected
                                  ? "1px solid #FFAE02"
                                  : "1px solid #FFFFFF",
                                borderRadius: "8px",
                                width: "150px",
                                height: "52px",
                              }}
                            >
                              <Box
                                sx={{
                                  backgroundColor: selected
                                    ? "#FFAE021A"
                                    : "#FFFFFF14",
                                  padding: "6px 4px 4px 4px",
                                  textAlign: "center",
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontFamily: "Open Sans",
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    lineHeight: "17.7px",
                                    textAlign: "center",
                                    color: " #FFFFFF",
                                  }}
                                >
                                  {title}
                                </Typography>
                              </Box>

                              <Typography
                                mb={1}
                                variant="body2"
                                sx={{
                                  fontFamily: "Open Sans",
                                  fontSize: "13px",
                                  fontWeight: 600,
                                  lineHeight: "17.7px",
                                  textAlign: "center",
                                  color: " #FFFFFF",
                                }}
                              >
                                {price}
                              </Typography>
                            </Stack>
                          </Fragment>
                        ))}
                      </Stack>
                      <Stack
                        direction="row"
                        gap={1}
                        sx={{
                          justifyContent: "center",
                          mt: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Open Sans",
                            fontSize: "13px",
                            fontWeight: 600,
                            lineHeight: "17.7px",
                            color: "#FFFFFF",
                          }}
                        >
                          DEX Launch Price
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Open Sans",
                            fontSize: "14px",
                            fontWeight: 600,
                            lineHeight: "19.07px",
                            color: "#FFFFFF",
                          }}
                        >
                          $0.01
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            color: "#70DF00",
                          }}
                        >
                          <Box mt={-0.2}>
                            <ArrowDropUpIcon />
                          </Box>

                          <Typography
                            sx={{
                              fontFamily: "Open Sans",
                              fontSize: "14px",
                              fontWeight: 600,
                              lineHeight: "19.07px",
                              textAlign: "left",
                            }}
                          >
                            (
                            {calculatePercentageDifference(
                              Number(currentStageTokenPrice) > 0
                                ? parseFloat(
                                  1 / Number(currentStageTokenPrice)
                                )?.toFixed(4)
                                : 0,
                              Number(nextStageTokenPrice) > 0
                                ? parseFloat(
                                  1 / Number(nextStageTokenPrice)
                                )?.toFixed(4)
                                : 0
                            )}
                            %)
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
                <Box
                  mt={1}
                  py={1}
                  sx={{
                    bgcolor: " #16161680",
                    borderRadius: "8px",
                    padding: "8px, 12px, 8px, 12px",
                  }}
                >
                  <Box
                    sx={{
                      px: 2.5,
                      display: "flex",
                      // justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "14px",
                        fontWeight: 700,
                        lineHeight: "19.07px",

                        color: "#FFFFFF",
                      }}
                    >
                      Network:
                    </Typography>

                    <Stack
                      sx={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        py: 0.2,
                        width: { xs: "55%", sm: "60%" },
                        height: "30px",
                        borderRadius: "8px",
                        border: "1px solid transparent",
                        bgcolor: "transparent",
                        color: "#FFFFFF",
                      }}
                    >
                      <Box
                        component={"img"}
                        alt=""
                        src={bnbIcon}
                        sx={{
                          width: "20px",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Open Sans",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "19.07px",
                        }}
                      >
                        BSC (BEP-20)
                      </Typography>
                    </Stack>
                  </Box>

                  {buttonDetails?.map((val, index) => (
                    <Stack
                      key={Math.random() * index + index}
                      mt={2}
                      direction="row"
                      gap={2}
                      px={3.1}
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {val?.map(({ name, value, icon }) => (
                        <Button
                          key={name}
                          variant="contained"
                          sx={{
                            borderRadius: "8px",
                            border:
                              value == buyWith
                                ? "1px solid #FFAE02"
                                : "1px solid #FFFFFF",
                            color: "#FFFFFF",

                            bgcolor: "#333333",
                            width: "100%",
                            "&:hover": {
                              backgroundColor: "#333333",
                            },
                          }}
                          startIcon={
                            <Box
                              component="img"
                              src={icon}
                              sx={{
                                width:
                                  name === "BTC" || name === "MATIC"
                                    ? { xs: "20px", sm: "30px" }
                                    : { xs: "15px", sm: "20px" },
                                height: { xs: "15px", sm: "20px" },
                              }}
                            />
                          }
                          onClick={() => handleAmountButtonClick(value)}
                        >
                          <Typography
                            mt={0.2}
                            sx={{
                              fontFamily: "Open Sans",
                              fontSize: { xs: "12px", sm: "14px" },
                              fontWeight: 600,
                              lineHeight: "19.07px",
                              textAlign: "center",
                            }}
                          >
                            {name}
                          </Typography>
                        </Button>
                      ))}
                    </Stack>
                  ))}
                  <Box mt={1.5} px={3} marginTop={2}>
                    <Stack
                      direction="row"
                      gap={2}
                      sx={{
                        justifyContent: "center",
                      }}
                    >
                      <Stack direction="column" width={"50%"} gap={0.5}>
                        <Typography
                          sx={{
                            fontFamily: "Open Sans",
                            fontSize: "13px",
                            fontWeight: 400,
                            lineHeight: "17.7px",
                            color: "#FFFFFF",
                          }}
                        >
                          Pay with {buyWith}
                        </Typography>
                        <StyledInput
                          type="text"
                          placeholder="Amount"
                          value={amount}
                          onChange={handleInputChange}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Box>
                                  <Box
                                    sx={{
                                      cursor: "pointer",
                                    }}
                                    onClick={() =>
                                      handleMaxClick(userWalletBalance[buyWith])
                                    }
                                  >
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: "black",
                                        fontSize: "12px",
                                        fontWeight: 500,
                                      }}
                                    >
                                      MAX
                                    </Typography>
                                  </Box>
                                </Box>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Stack>
                      <Stack
                        direction="column"
                        sx={{
                          justifyContent: "center",
                          width: "50%",
                          gap: 0.5,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Open Sans",
                            fontSize: "13px",
                            fontWeight: 400,
                            lineHeight: "17.7px",
                            color: "#FFFFFF",
                          }}
                        >
                          Receive CAPT
                        </Typography>
                        <StyledInput
                          type="text"
                          placeholder="0"
                          variant="outlined"
                          value={amount > 0 ? recivedToken : "0"}
                          sx={{
                            width: "90%",
                            height: "30px",
                          }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </Stack>
                    </Stack>
                  </Box>
                  <Stack
                    mt={1}
                    gap={1}
                    direction="row"
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "13px",
                        fontWeight: 700,
                        lineHeight: "17.7px",
                        textAlign: "center",
                        color: "#FF4242",
                      }}
                    >
                      Maximum purchase amount
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: "19.07px",
                        textAlign: "center",
                        color: "#FF4242",
                      }}
                    >
                      $5,000
                    </Typography>
                  </Stack>
                  <Box mt={1} pb={1} px={3}>
                    <Button
                      onClick={async () =>
                        account ? buyHandler() : await open()
                      }
                      fullWidth
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "21.07px",
                        color: "#161616",
                        textTransform: "capitalize",
                        bgcolor: "#FFAE02",
                        borderRadius: "8px",
                        padding: "12px 16px 12px 16px",
                        "&:hover": {
                          backgroundColor: "#FFAE02",
                        },
                      }}
                    >
                      {account ? "Buy" : "Connect Wallet"}
                    </Button>
                  </Box>
                </Box>
                <Box
                  mt={1}
                  py={1}
                  sx={{
                    bgcolor: " #16161680",
                    borderRadius: "8px",
                    border: "1px solid #FFAE02",
                    padding: "8px 12px 8px 12px",
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      mr={1}
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "10px",
                        fontWeight: 600,
                        lineHeight: "13.62px",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Contract Address
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "10px",
                        fontWeight: 600,
                        lineHeight: "13.62px",
                        textAlign: "center",
                        color: "#FF4242",
                      }}
                    >
                      (DO NOT PAY TO THIS ADDRESS)
                    </Typography>
                  </Stack>
                  <Stack
                    mt={1}
                    direction="row"
                    sx={{
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      mr={1}
                      mt={1}
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "16.62px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        width: "15%",
                      }}
                    >
                      BSC
                    </Typography>
                    <Typography
                      mr={2}
                      mt={1}
                      sx={{
                        fontFamily: "Open Sans",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "16.62px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {/* {presaleAddress} */}
                      0xe90895B3f0EdFF3DFa7A4281B55C914a2D2166c6
                    </Typography>
                    <Button
                      sx={{
                        color: "#161616",
                        bgcolor: "#FFFFFF",
                        borderRadius: "8px",
                        width: "10%",
                        "&:hover": {
                          backgroundColor: "#FFFFFF",
                        },
                      }}
                      onClick={handleCopyClick}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Open Sans",
                          fontSize: "12px",
                          fontWeight: 600,
                          lineHeight: "16.62px",
                          textAlign: "center",
                        }}
                      >
                        Copy
                      </Typography>
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HeroSection;
