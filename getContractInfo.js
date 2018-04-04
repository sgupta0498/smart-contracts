/*
A script that gets some basic info on a function in a smart contract on the Ethereum blockchain, then shows the result in the console.

This script will only get info from the contract we specify, be sure your queried address has public readable (call) functions.

For an explanation of this code, navigate to the wiki https://github.com/ThatOtherZach/Web3-by-Example/wiki/Get-Contract-Info
*/

// Require the Web3 Module
var Web3 = require('web3');
var fs = require('fs');
// Show Web3 where it needs to look for the Ethereum node
web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/YOUR-API-KEY'));

// Write to the console the script will run shortly
console.log('Calling Contract.....');

// Define the ABI of the contract, used to return the desired values

var contract = JSON.parse(fs.readFileSync('./contract.json', 'utf8'));

var crowdsale = JSON.parse(fs.readFileSync('./crowdsale.json', 'utf8'));

var pricing = JSON.parse(fs.readFileSync('./pricing_strategy.json','utf8'));

// Define the Ethereum address of the smart contract

var cont_addr = "0x215F4458c20A532961FB72762ceB17AaD70a7AE4";
var crowd_addr = "0xfb92Ce9B23c6181C1620B41A8141b7eEF2e613eD";

// Build a new variable based on the Web3 API including the ABI and address of the contract

var Contract = new web3.eth.Contract(contract, cont_addr);
var Crowdsale = new web3.eth.Contract(crowdsale, crowd_addr);

// Put it all together in a call and return the result to the console
// FUNCTION must the name of the function you want to call.
//Contract.methods.FUNCTION().call().then(console.log);

//Read abi from contract.json

Contract.methods.decimals().call().then(function(res){console.log("-------decimal------------------",res)});
Contract.methods.totalSupply().call().then(function(res){console.log("-------totalSupply--------------",res)});
Contract.methods.name().call().then(function(res){console.log("-------name---------------------",res)});
Contract.methods.symbol().call().then(function(res){console.log("-------symbol-------------------",res)});
Contract.methods.owner().call().then(function(res){console.log("-------owner--------------------",res)});
Contract.methods.minCap().call().then(function(res){console.log("-------minCap-------------------",res)});
Contract.methods.balanceOf("0x964937f03571Bb33bD2DA84Bca0B147027306fC3").call().then(function(res){console.log("-------balanceOf----------------",res)});
Contract.methods.releaseTokenTransfer().call().then(function(res){console.log("-------releaseTokenTransfer-----------",res)});

//Read abi from crowdsale.json

Crowdsale.methods.token().call().then(function(res){console.log("-------token--------------------",res)});
Crowdsale.methods.weiRaised().call().then(function(res){console.log("-------weiRaised----------------",res)});
Crowdsale.methods.minimumFundingGoal().call().then(function(res){console.log("-------minimumFundingGoal-------",res)});
Crowdsale.methods.tokensSold().call().then(function(res){console.log("-------tokensSold---------------",res)});
Crowdsale.methods.startsAt().call().then(function(res){console.log("-------startsAt-----------------",res)});
Crowdsale.methods.investorCount().call().then(function(res){console.log("---investorCount----------------",res)});
Crowdsale.methods.pricingStrategy().call().then(function(res){console.log("---pricingStrategy-------------",res)});





