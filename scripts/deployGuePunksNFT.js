const hre = require("hardhat");

async function main() {

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const GuePunksNFT = hre.ethers.utils.parseEther("1");

  const GuePunksNFT = await hre.ethers.getContractFactory("GuePunksNFT");
  const guepunksNFT = await GuePunksNFT.deploy();

  await guepunksNFT.deployed();

  console.log("GuePunksNFT deployed to:", guepunksNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(()=> process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
