
/**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     * 
     * Emits "Ownership changed to account: ", newOwner
     * 
     */

// npx hardhat run ./updateERC20/transferOwnership.js --network goerli

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

    const newOwner = ""; // address of new owner.
    await alaiContract.transferOwnership(newOwner);

    console.log("Ownership changed to account: ", newOwner);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

