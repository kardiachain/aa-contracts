import { task } from "hardhat/config";

task("stake", "Deposit paymaster for entry point")
  .addParam("paymaster", "Paymaster address to deposit")
  .setAction(async (_taskArgs, hre) => {
    const VerifyingPaymaster = await hre.ethers.getContractFactory('VerifyingPaymaster')
    const verifyingPaymaster = VerifyingPaymaster.attach(_taskArgs.paymaster)

    const stakeRS = await verifyingPaymaster.addStake(10, {value: hre.ethers.utils.parseEther("10")})
    
    console.log('stakeRS: ', stakeRS)
  });
