import { task } from "hardhat/config";

task("verifier", "Prints the verifier of paymaster")
  .addParam("paymaster", "Paymaster address to check verifier")
  .setAction(async (_taskArgs, hre) => {
    const VerifyingPaymaster = await hre.ethers.getContractFactory('VerifyingPaymaster')
    const verifyingPaymaster = VerifyingPaymaster.attach(_taskArgs.paymaster)

    const verifier = await verifyingPaymaster.verifier()
    console.log('Verifier: ', verifier)
  });
