/**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     * Increases allowance from currentAllowance - subtractedValue. 
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits "Decreased allowance for ", spender, " by " , subtractedValue
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */


// npx hardhat run ./updateERC20/decreaseAllowance.js --network goerli


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
    const subtractedValue = 100000000000000; // change 100000 (value plus 9 0s) to number of tokens to decrease the allowance by. If subtractedValue is 10 and allowance default is 100 new allowance would be 90.
    await alaiContract.decreaseAllowance(spender, subtractedValue);

    console.log("Decreased allowance for ", spender, " by " , subtractedValue);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

