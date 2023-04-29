
---

# <p align="center"> Realign AI   |   ALAI</p>
### <p align="center"> Update and Maintenance - Scripts</p>

<br>

<p>

Make sure you have the contract address saved. Each and every update script in ```./updateERC20``` will require adding account address and 'parameters' for desired changes.

</p>

---


#### approve
Sets `amount` as the allowance of `spender` over the `owner` s tokens.
This account will be able to transfer the owners tokens.

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const spender = "";` // Address of account to approve.
`const amount = 10000001000000000;` // Replace 10000001 (value + 9 0s)with number of tokens to approve. 

##### CLI : 
Save file before running script.
```npx hardhat run ./updateERC20/approve.js --network goerli ```


------ 

#### changeMarketingWallet
Changed the address of the marketing wallet.
This account will receive tax for Marketing.

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const newWallet = "";` // Add address of new marketing wallet.

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/changeMarketingWallet.js --network goerli ```

------
#### changeMaxTxAmount
Changes `MaxTxAmount` (Maximum number of tokens that can be transferred in 1 transaction)

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const maxTxAmount = 1000000000000000;` // Add new MaxTxAmount. Change '10000001'(value + 9 0s) to desired value of tokens

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/changeMaxTxAmount.js --network goerli ```

------
#### changeMaxWalletAmount
Changes max amount that can be held by a wallet. 

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const maxWalletAmount = 10000001000000000;` // Change max wallet amount.(value + 9 0s)

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/changeMaxWalletAmount.js --network goerli ```

------
#### changeSwapThresholds
Changes swap thresholds for max number of tokens that can be added to Liquidity. 
Values written right now are predefined values in contract.

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const numTokensSellToAddToLiquidity = 200000000000000;` // Change numTokensSellToAddToLiquidity. Change 200000 to desired amount.(value + 9 0s)
`const numTokensSellToAddToETH = 100000000000000` // Change numTokensSellToAddToETH. Change 100000(value + 9 0s)to desired amount.

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/changeSwapThresholds.js --network goerli ```

------
#### changeTaxForLiquidityAndMarketing
Changes tax for Liquidity and Marketing in % of transaction.
The values entered are default values in contract.

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const taxForLiquidity = 1;` // Change tax for Liquidity 
`const taxForMarketing = 4;` // Change tax for Marketing

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/changeTaxForLiquidityAndMarketing.js --network goerli ```

------
#### decreaseAllowance
Atomically decreases the allowance granted to `spender` by the caller.
Increases allowance from currentAllowance - subtractedValue. 

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const spender = "";` // account address whose allowance needs to be reduced.
`const subtractedValue = 100000000000000;` // change 100000 (value + 9 0s)to number of tokens to decrease the allowance by. If subtractedValue is 10 and allowance default is 100 new allowance would be 90.

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/decreaseAllowance.js --network goerli ```

------
#### excludeFromFee
Changes account settings to be excluded from taxes. Can approve or disapprove an account from paying taxes.
Tax will not be charged for both Lquidity and Marketing.

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const address = "";` // account address
`const bool = true;` // True or False to approve or disapprove account

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/excludeFromFee.js --network goerli ```

------
#### increaseAllowance
Atomically increases the allowance granted to `spender` by the caller.
Increases allowance from currentAllowance + addedValue. 

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const spender = "";` // account address whose allowance needs to be increased.
`const addedValue = 10000000000000;` // change 100000 (value + 9 0s)to number of tokens to increase the allowance by. If addedValue is 10 and allowance default is 100 new allowance would be 110.

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/increaseAllowance.js --network goerli ```

------
#### renounceOwnership
Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.

* NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner. 

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.


##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/renounceOwnership.js --network goerli ```

------
#### transfer
Moves `amount` tokens from the caller's account to `to`.

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const to = "";` // address of account to transfer tokens to from owner account.
`const amount = 100000000000000;` // number of tokens to transfer (value + 9 0s)

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/transfer.js --network goerli ```

------
#### transferFrom
Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance.

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const from = "";` // address of account to transfer from
`const to = "";` // address of account to transfer to
`const amount = "";` // amount of tokens to be transferred(value + 9 0s)

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/transferFrom.js --network goerli ```

------
#### transferOwnership
Transfers ownership of the contract to a new account (`newOwner`).
Can only be called by the current owner. 

##### Parameters to update:
`const contractAddress = "";` // Update contract address after deploying.
`const newOwner = "";` // address of new owner.

##### CLI : 

Save file before running script.
```npx hardhat run ./updateERC20/transferOwnership.js --network goerli ```

------