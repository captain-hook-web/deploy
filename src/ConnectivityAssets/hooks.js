import tokenAbi from "./tokenAbi.json";
import presaleAbi from "./presaleAbi.json";
import { presaleAddress } from "./environment";
import {
  readContract,
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";
import { CHAIN_ID } from "../utils/constant";
import { config } from "../utils/Web3ModalProvider";

const tokenReadFunction = async (address, functionName, args) => {
  const data = await readContract(config, {
    address,
    abi: tokenAbi,
    functionName,
    chainId: CHAIN_ID,
    args,
  });
  return data;
};
const presaleReadFunction = async (functionName, args) => {
  const data = await readContract(config, {
    address: presaleAddress,
    abi: presaleAbi,
    functionName,
    chainId: CHAIN_ID,
    args,
  });
  return data;
};
/// write functions
const tokenWriteFunction = async (address, functionName, args) => {
  const hash = await writeContract(config, {
    address,
    abi: tokenAbi,
    functionName,
    chainId: CHAIN_ID,
    args,
  });
  const receipt = await waitForTransactionReceipt(config, { hash });
  return receipt?.transactionHash;
};

const presaleWriteFunction = async (functionName, args, value) => {
  const hash = await writeContract(config, {
    address: presaleAddress,
    abi: presaleAbi,
    functionName,
    chainId: CHAIN_ID,
    args,
    value,
  });
  const receipt = await waitForTransactionReceipt(config, { hash });
  return receipt?.transactionHash;
};

export {
  tokenReadFunction,
  presaleReadFunction,
  tokenWriteFunction,
  presaleWriteFunction,
};
