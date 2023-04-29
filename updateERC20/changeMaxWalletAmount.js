/**
     * @dev // Changes max amount that can be held by a wallet. 
     * 
     * If a wallet holds 'a' amount of token and tried to buy 'b' amount and if 'a+b' > maxWalletAmount, transaction fails.
     * 
     * Emit : "Changed MaxWalletAmount to: ", maxWalletAmount.
     */

// npx hardhat run ./updateERC20/changeMaxWalletAmount.js --network goerli

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

    const maxWalletAmount = 10000001000000000; // Change max wallet amount.(value + 9 0s)
    await alaiContract.changeMaxWalletAmount(maxWalletAmount); 

    console.log("Changed MaxWalletAmount to: ", maxWalletAmount);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

