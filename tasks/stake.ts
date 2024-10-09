import { task } from "hardhat/config";

task("stake", "Deposit paymaster for entry point")
  .setAction(async (_taskArgs, hre) => {
    const VerifyingPaymaster = await hre.ethers.getContractFactory('VerifyingPaymaster')
    const deployed = await hre.deployments.get('VerifyingPaymaster')
    const verifyingPaymaster = VerifyingPaymaster.attach(deployed.address)

    const stakeRS = await verifyingPaymaster.addStake(10, {value: hre.ethers.utils.parseEther("10")})
    
    console.log('stakeRS: ', stakeRS)
  });

task('checkep', "Check entry point address ")
  .setAction(async (_taskArgs, hre) => {

    const VerifyingPaymasterFactory = await hre.ethers.getContractFactory("VerifyingPaymaster")
    const deployed = await hre.deployments.get('VerifyingPaymaster')
    const paymaster = VerifyingPaymasterFactory.attach(deployed.address)

    const entryPoint = await paymaster.entryPoint()
    
    console.log("Paymaster ", deployed.address)
    console.log('entryPoint: ', entryPoint)
  });
