module.exports = function (deployer) {
  deployer.deploy(artifacts.require('ConditionalTokens'));
  deployer.deploy(artifacts.require('WETH9'));
}
