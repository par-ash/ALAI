
/**
     * @dev Changes tax for Liquidity and Marketing in % of transaction.
     * The values entered are default values in contract.
     *
     * Emits "New tax for liquidity: ", taxForLiquidity, ". New tax for Marketing: ", taxForMarketing
     *
     * Requirements:
     *
     * 
     */


// To deploy run : 
// npx hardhat run ./updateERC20/changeTaxForLiquidityAndMarketing.js --network goerli

const {ethers} = require("hardhat");
require('dotenv').config()

async function contractAt(name, address, provider) {
    let contractFactory = await ethers.getContractFactory(name)
    if (provider) {
        contractFactory = contractFactory.connect(provider)
    }
    return await contractFactory.attach(address)
}

async function main() {
    const contractAddress = "0x0A8E76a1F053c13FF0EaFAd99db01d02CaEd2cC1"; // Update contract address after deploying

    const alaiContract = await contractAt("ALAI", contractAddress);

    // Change swap thresholds.
    const taxForLiquidity = 3; // Change tax for Liquidity 
    const taxForMarketing = 5; // Change tax for Marketing
    await alaiContract.changeTaxForLiquidityAndMarketing( taxForLiquidity, taxForMarketing);

    console.log("New tax for liquidity: ", taxForLiquidity, ". New tax for Marketing: ", taxForMarketing);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

