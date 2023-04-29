require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config()
const { INFURA_API, PRIV_KEY, POLY_KEY, ALCH_KEY, SEP_KEY } = require("./env.json");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      chainId: 5,
      allowUnlimitedContractSize: true,
      url: "https://goerli.infura.io/v3/" + INFURA_API,
      // url: "https://eth-goerli.g.alchemy.com/v2/" + ALCH_KEY,
      accounts: [PRIV_KEY],
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/"+ SEP_KEY,
      accounts: [PRIV_KEY]
    },
    polygon_mumbai: {
      allowUnlimitedContractSize: true,
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIV_KEY]
    },
  },
  etherscan: {
    apiKey: [POLY_KEY]
  },
};



// Test deployment - 0x4dec4E552424Cf0756a295bc661141e0be203B5F
// Uniswap V2 Pair - 0xF641Af26c1b886044ea5F26673B12A963C4F920B
//Post Launch succesful
// Uniswap