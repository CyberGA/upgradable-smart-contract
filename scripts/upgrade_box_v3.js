

const { ethers, upgrades } = require("hardhat")

const PROXYBOXV2 = "0x9d16d4592a0e041d1326755353B760755dBb14c1"

async function main() {
    const BoxV3 = await ethers.getContractFactory("BoxV3")
    await upgrades.upgradeProxy(PROXYBOXV2, BoxV3);

    console.log("V3 deployed")
}

main().then(() => process.exit(0)).catch((error) => {
    console.log(error);
    process.exit(1)
})