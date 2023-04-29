
/**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     * Increases allowance from currentAllowance + addedValue. 
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits "Increased allowance for ", spender, " by " , addedValue
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */


// npx hardhat run ./updateERC20/increaseAllowance.js --network goerli


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

    const spender = ""; // account address whose allowance needs to be reduced.
    const addedValue = 100000000000000; // change 100000 (value + 9 0s)to number of tokens to increase the allowance by. If addedValue is 10 and allowance default is 100 new allowance would be 110.
    await alaiContract.increaseAllowance(spender, addedValue);

    console.log("Increased allowance for ", spender, " by " , addedValue);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

