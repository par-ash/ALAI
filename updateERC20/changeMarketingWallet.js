 /**
     * @dev Changed the address of the marketing wallet.
     * This account will receive tax for Marketing.
     *
     *
     * Emits - "New marketing wallet changed to: ", newWallet.
     *
     * Requirements:
     *
     * - `newWallet` cannot be the zero address.
     * 
     */


// npx hardhat run ./updateERC20/changeMarketingWallet.js --network goerli
 
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

    const newWallet = ""; // Add address of new marketing wallet.
    await alaiContract.changeMarketingWallet(newWallet); 

    console.log("New marketing wallet changed to: ", newWallet);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

