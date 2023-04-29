/**
     * @dev Changes MaxTxAmount (Maximum number of tokens that can be transferred in 1 transaction)
     *
     * Emits - "Max Transaction Amount Changed to: ".
     * 
     */

// npx hardhat run ./updateERC20/changeMaxTxAmount.js --network goerli

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

    const maxTxAmount = 10000001000000000; // Add new MaxTxAmount. Change '10000001'(value + 9 0s) to desired value of tokens
    await alaiContract.changeMaxTxAmount(maxTxAmount); 

    console.log("Max Transaction Amount Changed to: ", maxTxAmount);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

