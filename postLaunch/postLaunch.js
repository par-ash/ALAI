
// Deploy after launch calling the PostLaunch function to change tax.


// npx hardhat run ./postLaunch/postLaunch.js --network goerli 

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
    const contractAddress = "0x4a2862C4E6C4d370168d3B1F97Ec85Ff90ec32bE"; // Update contract address after deploying

    const alaiContract = await contractAt("ALAI", contractAddress);
    await alaiContract.postLaunch();

    console.log("Post Launch successful!")
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

