const Kittycontract = artifacts.require("Kittycontract");

module.exports = function(deployer) {
  deployer.deploy(Kittycontract);
};
