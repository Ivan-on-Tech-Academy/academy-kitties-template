const Token = artifacts.require("Kittycontract");

module.exports = function(deployer) {
  deployer.deploy(Token);
};
