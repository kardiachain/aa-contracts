// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')

async function main () {
  const VerifyingPaymaster = await hre.ethers.getContractFactory('VerifyingPaymaster')
  const verifyingPaymaster = VerifyingPaymaster.attach("0xAFeC3055f052AFC748EBF5197a1E7CB262266d91")

  const verifier = await verifyingPaymaster.verifier()
  console.log('Verifier: ', verifier)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
