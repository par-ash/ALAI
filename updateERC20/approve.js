 /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     * This account will be able to transfer the owners tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits "Approved spender ", spender, " for amount ", amount.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */

// npx hardhat run ./updateERC20/approve.js --network goerli 

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
    const contractAddress = "0x0A8E76a1F053c13FF0EaFAd99db01d02CaEd2cC1"; // Update contract address after deploying.

    const alaiContract = await contractAt("ALAI", contractAddress);


    const spender = ""; // Address of account to approve.
    const amount = 10000001000000000; // Replace 10000001 with number of tokens to approve. Add 9 0s as our token has 9 decimals.
    await alaiContract.approve("" , ); 

    console.log("Approved spender ", spender, " for amount ", amount);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

