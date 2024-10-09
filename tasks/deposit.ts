import { task } from "hardhat/config";

task("deposit", "Deposit paymaster for entry point")
  .setAction(async (_taskArgs, hre) => {
    const VerifyingPaymaster = await hre.ethers.getContractFactory('VerifyingPaymaster')
    const deployed = await hre.deployments.get('VerifyingPaymaster')

    console.log('deployed.address', deployed.address)

    const verifyingPaymaster = VerifyingPaymaster.attach(deployed.address)

    const depositRS = await verifyingPaymaster.deposit({value: hre.ethers.utils.parseEther("0.1")})
    
    console.log('depositRS: ', depositRS)
  });
