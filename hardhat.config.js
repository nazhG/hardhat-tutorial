require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "yfnCMQlCJx3_XixsOtYneIxv1IYfBK5N";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const RINKEBY_PRIVATE_KEY = "df9f307659ec414d58daea7f6625a4836316e38bc39c290611701e58faa95038";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/13322d87cfd54c9a880aad0ff59a507c`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
