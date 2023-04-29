
/**
     * @dev Changes account settings to be excluded from taxes. Can approve or disapprove an account from paying taxes.
     * Tax will not be charged for both Lquidity and Marketing.
     *
     *
     * Emits "Account ", address, " excluded from fee: ", bool
     *
     * Requirements:
     *
     * - `address` cannot be the zero address.
     */


// npx hardhat run ./updateERC20/excludeFromFee.js --network goerli


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

    //This wallet will be excluded from tax fees.
    const address = ""; // account address
    const bool = true; // True or False to approve or disapprove account
    await alaiContract.excludeFromFee(address, bool);

    console.log("Account ", address, " excluded from fee: ", bool);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// npx hardhat run ./updateERC20/excludeFromFee.js --network goerli