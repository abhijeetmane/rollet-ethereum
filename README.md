# Project Title

Place bet on rollet and win ethers.

# Project Description

This Project is online rollet where user can place bet on any number from 1 to 10 and win if selected number is winning number.

### Tech Stack

Application uses a number of open source projects to work properly:

* [solidity]
* [truffle]
* [geth]
* [web3]
* [react]
* [ES6]
* [node.js]
* [webpack]
* [Babel]

### Installation

```Requires [Node.js](https://nodejs.org/) - to install and run node modules.```

```Requires [MetaMask](https://metamask.io/) - to interact with Dapps```

```Requires [IPFS](https://ipfs.io/docs/install/) -  free hosting &  decentralized.```

### Installing project Dependencies.

```
$ cd rollet-ethereum
$ npm install
```

### Steps to run this application

 * cd **rollet-ethereum**
 * webpack (if you make any changes in src code otherwise skip this step)
 * ipfs daemon
 * ipfs swarm peers
 * ipfs add -r dist/
 * Copy the last hash and run <b style='color:#2773b1'>ipfs name publish`<last-hash>`</b>
 * Copy the hash in first line and open 
 <b style='color:#2773b1'>gateway.ipfs.io/ipns/`<first-hash>`</b> in browser
 * Remember to create account on MetaMask and set Metamask on the Ropsten Test Network.

 ### Application Flow
 * Enter no of ethers you want to bet
 * Select no on which you want to place bet
 * Click on submit button. MetaMask window will be popped up. 
 * Click Reset or Reject or Submit based on what you want to do.
 * If you select Submit then bet will be placed and mining will start.
 * You can check transaction details by clicking on transactions under MetaMask

### Upcoming features
 * Test cases for Contract
 * Play rollet beween 2 players and transfer balance between those 2 accounts