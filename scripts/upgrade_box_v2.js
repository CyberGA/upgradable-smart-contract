

const { ethers, upgrades } = require("hardhat");

const PROXY = "0x9d16d4592a0e041d1326755353B760755dBb14c1"

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box Contract upgraded");
}

main().then(() => process.exit(0)).catch((error) => {
    console.log(error)
    process.exit(1)
})