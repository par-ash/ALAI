
 /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits : Transferred ", amount, " tokens to account ", to
     */

// npx hardhat run ./updateERC20/transfer.js --network goerli

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

    const to = "0xEF84dE6F1014ab698b4B3B3172F950F251270db4"; // address of account to transfer tokens to from owner account.
    const amount = 100000000000000; // number of tokens to transfer. amount + 9 0s
    await alaiContract.transfer(to, amount );

    console.log("Transferred ", amount, " tokens to account ", to);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

