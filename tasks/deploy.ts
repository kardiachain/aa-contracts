import { Signer } from "@ethersproject/abstract-signer";
import { task } from "hardhat/config";

task("deploy", "Deploy verifying paymaster", async (_taskArgs, hre) => {
  const accounts: Signer[] = await hre.ethers.getSigners();

  const VerifyingPaymaster = await hre.ethers.getContractFactory('VerifyingPaymaster')

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});
