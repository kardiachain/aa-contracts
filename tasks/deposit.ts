import { task } from "hardhat/config";

task("deposit", "Deposit paymaster for entry point")
  .addParam("paymaster", "Paymaster address to deposit")
  .setAction(async (_taskArgs, hre) => {
    const VerifyingPaymaster = await hre.ethers.getContractFactory('VerifyingPaymaster')
    const verifyingPaymaster = VerifyingPaymaster.attach(_taskArgs.paymaster)

    const depositRS = await verifyingPaymaster.deposit({value: hre.ethers.utils.parseEther("0.1")})
    
    console.log('depositRS: ', depositRS)
  });
