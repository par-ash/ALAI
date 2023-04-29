
/**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits "Transferred ", amount, " tokens from account ", from, " to account ", to.
     */

// npx hardhat run ./updateERC20/transferFrom.js --network goerli

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

    const from = "0xEF84dE6F1014ab698b4B3B3172F950F251270db4"; // address of account to transfer from
    const to = "0x214572F9DeBbA517feD78E008A3962E091e58295"; // address of account to transfer to
    const amount = "1000000000000"; // amount of tokens to be transferred. Amount + 9 0s
    await alaiContract.transferFrom(from, to, amount);

    console.log("Transferred ", amount, " tokens from account ", from, " to account ", to);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

