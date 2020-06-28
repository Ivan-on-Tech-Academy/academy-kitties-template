const Marketplace = artifacts.require("KittyMarketPlace");
const Kittycontract = artifacts.require("Kittycontract");

module.exports = function(deployer) {
  console.log(Kittycontract.address)
  deployer.deploy(Marketplace, Kittycontract.address);
};
