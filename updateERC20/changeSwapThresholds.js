/**
     * @dev Changes swap thresholds for max number of tokens that can be added to Liquidity. 
     * Values written right now are predefined values in contract.
     *
     *
     * Emits - "Swap thresholds changed. Threshold for numTokensSellToAddToLiquidity: ", numTokensSellToAddToLiquidity, "and threshold for numTokensSellToAddToETH: ", numTokensSellToAddToETH
     *
     * Requirements:
     *
     * - numTokensSellToAddToLiquidity - has to be less than 98%
     * - numTokensSellToAddToETH - has to be less than 98% 
     * 
     */


// npx hardhat run ./updateERC20/changeSwapThresholds.js --network goerli


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
    const numTokensSellToAddToLiquidity = 200000000000000; // Change numTokensSellToAddToLiquidity. Change 200000(value + 9 0s) to desired amount.
    const numTokensSellToAddToETH = 100000000000000; // Change numTokensSellToAddToETH. Change 100000 (value + 9 0s)to desired amount.
    
    await alaiContract.changeSwapThresholds( numTokensSellToAddToLiquidity, numTokensSellToAddToETH); 

    console.log("Swap thresholds changed. Threshold for numTokensSellToAddToLiquidity: ", numTokensSellToAddToLiquidity, "and threshold for numTokensSellToAddToETH: ", numTokensSellToAddToETH);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

