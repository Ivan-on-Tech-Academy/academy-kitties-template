const Kittycontract = artifacts.require("Kittycontract");
const Marketplace = artifacts.require("KittyMarketplace");

module.exports = function(deployer) {
  deployer.deploy(Marketplace, Kittycontract.address);
};
