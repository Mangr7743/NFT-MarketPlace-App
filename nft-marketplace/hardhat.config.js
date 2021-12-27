require("@nomiclabs/hardhat-waffle");


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://goerli.infura.io/v3/${process.env.projectId}`
    },
    mainnet: {}
  },
  solidity: "0.8.4",
};
