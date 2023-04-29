// Deploys contract.

// npx hardhat run ./scripts/deployALAI.js --network goerli


const { ethers } = require("hardhat");

async function deployTokenAndCreatePair() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const ALAI = await ethers.getContractFactory("ALAI");
    const token = await ALAI.deploy();
    
    console.log("Realign AI token address:", token.address); // Save this address.
   

    return;
}

deployTokenAndCreatePair()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


// npx hardhat run ./scripts/deployALAI.js --network goerli

