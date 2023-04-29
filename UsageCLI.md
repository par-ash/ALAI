
---

# <p align="center"> Realign AI   |   ALAI</p>
### <p align="center"> Update and Maintenance - Hardhat Console</p>

<br>

<p>

After contract is deployed and `verified`, we can read and write contracts directly from the terminal using hardhat console.

Setting up hardhat console:
`npx hardhat console -—network goerli`


Setting up contract interaction:
0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0

```
const ALAI = await ethers.getContractFactory(‘ALAI’);

const alai = await ALAI.attach('0x4dec4E552424Cf0756a295bc661141e0be203B5F');
```

Replace contract address with your deployed address. 

Now we can interact with our smart contract directly from the console.

Once Uniswap Liquidity has been provided as per your convenience, we can setup postLaunch with this method. In terminal, please execute:

##### Current State: 

CLI:

```
console.log("Current Taxes: 1. Tax For Liquidity - ", await alai.taxForLiquidity(), " 2. Tax For Marketing = ", await alai.taxForMarketing());
```
Output:
```
Current Taxes: 1. Tax For Liquidity -  BigNumber { value: "47" }  2. Tax For Marketing =  BigNumber { value: "47" }
```
<br>

##### Function Call:
CLI:
```
await alai.postLaunch();
```
Output:
```
{
  hash: '0x88f7a858cbea1f7dc8e50275e6643d1249cd0251a5ed433b4fd708a62469d9bc',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "258641343408" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "258641343408" },
  gasLimit: BigNumber { value: "41699" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 59,
  data: '0xa3996f7b',
  r: '0xf884a095faee428bf862c519982f9e3157ec360fc1eea0d63c6ddaeca942d035',
  s: '0x33885efe5ab2962238d63a5bd792c4ad65965ec9c1f7678106edd6287c9dc659',
  v: 1,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```
<br>

##### Updated State:
CLI:
```
console.log("Updated Taxes: 1. Tax For Liquidity - ", await alai.taxForLiquidity(), " 2. Tax For Marketing = ", await alai.taxForMarketing());
```
Output:
```
Updated Taxes: 1. Tax For Liquidity -  BigNumber { value: "1" }  2. Tax For Marketing =  BigNumber { value: "4" }
```
As expected, the taxes changed from pre defined 47,47 on the contract to 1,4 respectively as defined in the postLaunch function in the contract.


##### Directly add values inside `()` of each function and not the variable names.

</p>

---


#### approve
Sets `amount` as the allowance of `spender` over the `owner` s tokens.
This account will be able to transfer the owners tokens.

##### Parameters to provide:

`const spender = "";` // Address of account to approve.
`const amount = 10000001000000000;` // Replace 10000001 (value + 9 0s)with number of tokens to approve. 
<br>

As expected, the wallet `spender` had approval to spend `0` tokens and after calling the function, we changed the approved limit of the wallet by the desired amount.

##### Current State: 
CLI:

```
console.log("Current allowance of account: ", await alai.allowance(await alai.owner(), '0xEF84dE6F1014ab698b4B3B3172F950F251270db4'));
```
Ouput:
```
Current allowance of account:  BigNumber { value: "0" }
```

##### Function Call:

CLI:
```
await alai.approve('0xEF84dE6F1014ab698b4B3B3172F950F251270db4' , 100000000000); 
```
Ouput:
```
{
  hash: '0x301cd7a60b2bd0795df98baee2c65ae185db2be57a9bb440d2bb86a006d9ea82',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "266414665003" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "266414665003" },
  gasLimit: BigNumber { value: "46938" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 60,
  data: '0x095ea7b3000000000000000000000000ef84de6f1014ab698b4b3b3172f950f251270db4000000000000000000000000000000000000000000000000000000174876e800',
  r: '0x52aee41d586fd1bbfa808e5b92bdbe133efc3f7cb8a11b9eacf9803d062b81b1',
  s: '0x06ee940f554ff7d68ab141b9386e7863941b00e3b972da1dca550fb56e3ba623',
  v: 0,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```

##### Updated State:
CLI:
```
console.log("New allowance of account: ", await alai.allowance(alai.owner(), '0xEF84dE6F1014ab698b4B3B3172F950F251270db4'));
```
Ouput:
```
New allowance of account:  BigNumber { value: "100000000000" }
```



------ 

#### changeMarketingWallet
Changed the address of the marketing wallet.
This account will receive tax for Marketing.

##### Parameters to provide:

`const newWallet = "";` // Add address of new marketing wallet.

<br>
As expected, marketing wallet changed from existing wallet to desired wallet. I tried making the dead wallet the wallet but that did not work satisfying our requirement in the contract.

##### Current State: 
CLI:
```
console.log("Current marketing wallet : ", await alai.marketingWallet());
```
Output:
```
Current marketing wallet :  0x214572F9DeBbA517feD78E008A3962E091e58295
```

##### Function Call:
CLI:
```
await alai.changeMarketingWallet('0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34'); 
```
 Output:
```
{
  hash: '0x3661c869ff854c370f0ca84fad2856804d0878ec047a528c0c1486af3b462ec0',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "249654430614" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "249654430614" },
  gasLimit: BigNumber { value: "30898" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 61,
  data: '0xbb85c6d1000000000000000000000000214572f9debba517fed78e008a3962e091e58295',
  r: '0x853f15b32d3b9a0fbc48e5e4d8823ce9128eaf29f88e419dd0c46e651e1b6e74',
  s: '0x6b12c9a8adfdb2753055fa492455b62128574dccdf216a98461967192ef61902',
  v: 1,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```


##### Updated State:
CLI:
```
console.log("New marketing wallet :", await alai.marketingWallet());
```
Output:
```
New marketing wallet : 0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34
```



------
#### changeMaxTxAmount
Changes `MaxTxAmount` (Maximum number of tokens that can be transferred in 1 transaction)

##### Parameters to provide:

`const maxTxAmount = 1000000000000000;` // Add new MaxTxAmount. Change '10000001'(value + 9 0s) to desired value of tokens


<br>
We changed the maxTxAmount succesfully to desired limit.

##### Current State: 
CLI:

```
console.log(" Current maxTxAmount: ", await alai.maxTxAmount());
```
Output:
```
Current maxTxAmount:  BigNumber { value: "10000001000000000" }
```

##### Function Call:
CLI:
```
await alai.changeMaxTxAmount(1000000);
```
Output:
```
{
  hash: '0x92b6f38700a8a210864723db72e8f25fd4d7dc341f747a46814cc39c05b9c071',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "209974754406" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "209974754406" },
  gasLimit: BigNumber { value: "29159" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 62,
  data: '0x677daa5700000000000000000000000000000000000000000000000000000000000f4240',
  r: '0x9b4b78f340bff39bc76b50c74e3701756836f5c064f2770f6cad7d668bf6b1a2',
  s: '0x1b797bbcd13c6aa5b3b59f8868a4b385716c0fbc29dfbeaefedfad13f01b233f',
  v: 0,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```

##### Updated State:
CLI:
```
console.log("Updated maxTxAmount: ", await alai.maxTxAmount());
```
Output:
```
Updated maxTxAmount:  BigNumber { value: "1000000" }
```

------
#### changeMaxWalletAmount
Changes max amount that can be held by a wallet. 

##### Parameters to provide:

`const maxWalletAmount = 10000001000000000;` // Change max wallet amount.(value + 9 0s)


<br>
Change the MaxWalletAmount successfully to the desired number.

##### Current State: 
CLI:

```
console.log("Current maxWalletAmount: ", await alai.maxWalletAmount());
```
Output:
```
Current maxWalletAmount:  BigNumber { value: "10000001000000000" }
```

##### Function Call:
CLI:
```
await alai.changeMaxWalletAmount(100000000000000);  
```
Output:
```
{
  hash: '0x467cca6d232b0976bae148bdaf45309ed36342eca6bf8824af4beffa63fd0f7d',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "230794356517" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "230794356517" },
  gasLimit: BigNumber { value: "29184" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 63,
  data: '0x81bfdcca00000000000000000000000000000000000000000000000000005af3107a4000',
  r: '0x041fb506b52f6b117e4fae09dfcffbbd840a9243b322072a7df733327319181d',
  s: '0x5ff8925bcedca43b3b90c66c790c06f5ac5f8a626df16710823f29faff4b527c',
  v: 0,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```

##### Updated State:
CLI:
```
console.log("Updated maxWalletAmount: ", await alai.maxWalletAmount());
```
Output:
```
Updated maxWalletAmount:  BigNumber { value: "100000000000000" }
```

------
#### changeSwapThresholds
Changes swap thresholds for max number of tokens that can be added to Liquidity. 
Values written right now are predefined values in contract.

##### Parameters to provide:

`const numTokensSellToAddToLiquidity = 200000000000000;` // Change numTokensSellToAddToLiquidity. Change 200000 to desired amount.
`const numTokensSellToAddToETH = 100000000000000` // Change numTokensSellToAddToETH. Change to desired amount.

Change to desired amount `without 9 0s`.

<br>
Successfully changed `numTokensSellToAddToLiquidity` and `numTokensSellToAddToETH` to the required amounts.

##### Current State: 
CLI:

```
console.log("Current numTokensSellToAddToLiquidity: ", await alai.numTokensSellToAddToLiquidity(), " numTokensSellToAddToETH : ", await alai.numTokensSellToAddToETH());
```
Output:
```
Current numTokensSellToAddToLiquidity:  BigNumber { value: "200000000000000" }  numTokensSellToAddToETH :  BigNumber { value: "100000000000000" }
```

##### Function Call:
CLI:
```
await alai.changeSwapThresholds( 1500000, 900000);
```
Output:
```
{
  hash: '0x4140d3e52ec03dcee0603644a09da35b18bdb2173e9f7437aca48e5ef77b458b',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "267027623622" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "267027623622" },
  gasLimit: BigNumber { value: "40821" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 64,
  data: '0x30b63d80000000000000000000000000000000000000000000000000000000000016e36000000000000000000000000000000000000000000000000000000000000dbba0',
  r: '0x69c17764dee80cc9aa404816e68307b77259a0096924e883f170e8105b63e4b4',
  s: '0x03546fba7a13481e74c6c9429dccc48c824c2b7d89fa063bb9558bc099423fc4',
  v: 1,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```
Note - No additional 0s needed after token number.

##### Updated State:
CLI:
```
console.log("Updated numTokensSellToAddToLiquidity: ", await alai.numTokensSellToAddToLiquidity(), " numTokensSellToAddToETH : ", await alai.numTokensSellToAddToETH());
```
Output:
```
Updated numTokensSellToAddToLiquidity:  BigNumber { value: "1500000000000000" }  numTokensSellToAddToETH :  BigNumber { value: "900000000000000" }
```

------
#### changeTaxForLiquidityAndMarketing
Changes tax for Liquidity and Marketing in % of transaction.
The values entered are default values in contract.

##### Parameters to provide:

`const taxForLiquidity = 1;` // Change tax for Liquidity 
`const taxForMarketing = 4;` // Change tax for Marketing


<br>
Changed tax for Liquidity and Marketing in % of transaction to the desired amount.

##### Current State:
CLI: 

```
console.log("Current taxes. 1. Tax for liquidity: ", await alai.taxForLiquidity(), " 2. Tax for Marketing: ", await alai.taxForMarketing());
```
Output:
```
Current taxes. 1. Tax for liquidity:  BigNumber { value: "1" }  2. Tax for Marketing:  BigNumber { value: "4" }
```

##### Function Call:
CLI:
```
await alai.changeTaxForLiquidityAndMarketing(3, 7);
```
Output:
```
{
  hash: '0x102541641a52eb3896b4805e69fea6370a2abd60c3c6c03d869d80dc209b6ff3',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "204098326613" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "204098326613" },
  gasLimit: BigNumber { value: "29104" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 66,
  data: '0xaf8af69000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000007',
  r: '0xd87333b6e3c951bfcca8f4567e58c5a6c8a08f2aac8104394735526b31b944b5',
  s: '0x018971bacebf1b649c0bcc511c0eaf26ff1cb274ed5997e42fccd3bc3a8352c3',
  v: 0,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```

##### Updated State:
CLI:
```
console.log("Updated taxes. 1. Tax for liquidity: ", await alai.taxForLiquidity(), " 2. Tax for Marketing: ", await alai.taxForMarketing());
```
Output:
```
Updated taxes. 1. Tax for liquidity:  BigNumber { value: "3" }  2. Tax for Marketing:  BigNumber { value: "7" }
```

------
#### decreaseAllowance
Atomically decreases the allowance granted to `spender` by the caller.
Increases allowance from currentAllowance - subtractedValue. 

##### Parameters to provide:

`const spender = "";` // account address whose allowance needs to be reduced.
`const subtractedValue = 100000000000000;` // change 100000 (value + 9 0s)to number of tokens to decrease the allowance by. If subtractedValue is 10 and allowance default is 100 new allowance would be 90.

<br>
Changed the allowance of desired wallet by the desired amount successfully.

##### Current State: 
CLI:
```
console.log("Current allowance of account: ", await alai.allowance(await alai.owner(), '0xEF84dE6F1014ab698b4B3B3172F950F251270db4'));
```
Output:
```
Current allowance of account:  BigNumber { value: "100000000000" }
```

##### Function Call:
CLI:
```
await alai.decreaseAllowance('0xEF84dE6F1014ab698b4B3B3172F950F251270db4', 500000);
```
Output:
```
{
  hash: '0x4930e563d39fc51b8ecd0a4bab4a30f6b8aed6aef5a7dad4f331f036b257a204',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "175907718848" },
  maxPriorityFeePerGas: BigNumber { value: "6411472954" },
  maxFeePerGas: BigNumber { value: "175907718848" },
  gasLimit: BigNumber { value: "30075" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 67,
  data: '0xa457c2d7000000000000000000000000ef84de6f1014ab698b4b3b3172f950f251270db4000000000000000000000000000000000000000000000000000000000007a120',
  r: '0xf253a69ee51a9828c4fae079d5fc6362c004443d9fd660bb382317ec35e9120e',
  s: '0x4021a132485b5a68981000e0f167dd9eee1bf7383aebd6028b3340770573f252',
  v: 1,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}

```

##### Updated State:
CLI:
```
console.log("Updated allowance of account: ", await alai.allowance(await alai.owner(), '0xEF84dE6F1014ab698b4B3B3172F950F251270db4'));

```
Output:
```
Updated allowance of account:  BigNumber { value: "99999500000" }
```

---

#### excludeFromFee
Changes account settings to be excluded from taxes. Can approve or disapprove an account from paying taxes.
Tax will not be charged for both Lquidity and Marketing.

##### Parameters to provide:

`const address = "";` // account address
`const bool = true;` // True or False to approve or disapprove account

<br>
Checked whether a wallet was excluded from fee. Called the function and changed its status successfully.

##### Current State: 
CLI:
Returns whether wallet is excluded from fee or not.
```
console.log("Current state : ", await alai._isExcludedFromFee('0x67013eC9483864AFbBC54452F7D50Fa5176BbC42'));
```
Output:
```
Current state :  false
```

##### Function Call:
CLI:
```
await alai.excludeFromFee('0x67013eC9483864AFbBC54452F7D50Fa5176BbC42', 'true');
```
Output:
```
{
  hash: '0xc29f6cfbecf89d62e319021affb0b1b3f50cb34c9569951075e676173ebfd725',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "187825178721" },
  maxPriorityFeePerGas: BigNumber { value: "3000000000" },
  maxFeePerGas: BigNumber { value: "187825178721" },
  gasLimit: BigNumber { value: "29101" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 69,
  data: '0xdf8408fe00000000000000000000000067013ec9483864afbbc54452f7d50fa5176bbc420000000000000000000000000000000000000000000000000000000000000001',
  r: '0xe8998ba089fed0465f9136211b8de711bf1fd016c6e1755b5ac81fd7cbab4bfa',
  s: '0x768fe6e55dcf4cd694727d3bc1ca568ac99310701a892be422bfdd21a565708d',
  v: 0,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```

##### Updated State:
CLI:
```
console.log("Updated state : ", await alai._isExcludedFromFee('0x67013eC9483864AFbBC54452F7D50Fa5176BbC42'));
```
Output:
```
Updated state :  true
```

------

#### increaseAllowance

Atomically increases the allowance granted to `spender` by the caller.
Increases allowance from currentAllowance + addedValue. 

##### Parameters to provide:

`const spender = "";` // account address whose allowance needs to be increased.
`const addedValue = 10000000000000;` // change 100000 (value + 9 0s)to number of tokens to increase the allowance by. If addedValue is 10 and allowance default is 100 new allowance would be 110.

<br>
Changed the allowance of desired wallet by the desired amount successfully.

##### Current State: 
CLI:

```
console.log("Current allowance of account: ", await alai.allowance(await alai.owner(), '0xEF84dE6F1014ab698b4B3B3172F950F251270db4'));
```
Output:
```
Current allowance of account:  BigNumber { value: "99999500000" }
```

##### Function Call:
CLI:
```
await alai.increaseAllowance('0xEF84dE6F1014ab698b4B3B3172F950F251270db4', 500000);
```
Output:
```
{
  hash: '0x36ca955d793fb1b3242ff3f59bd62fe4df9fa94cae1af883f0fb257eb563b470',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "274222384261" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "274222384261" },
  gasLimit: BigNumber { value: "30225" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 70,
  data: '0x39509351000000000000000000000000ef84de6f1014ab698b4b3b3172f950f251270db4000000000000000000000000000000000000000000000000000000000007a120',
  r: '0xe60311c109e3d33754b69d7dac95bd3ba7f948081521677b6a3eea18391053cc',
  s: '0x28e64e5df75b5bf32b8332c937cacbe4eeb5b7a237bff6c1b1799dc9244b5010',
  v: 0,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```

##### Updated State:
CLI:
```
console.log("Updated allowance of account: ", await alai.allowance(await alai.owner(), '0xEF84dE6F1014ab698b4B3B3172F950F251270db4'));
```
Output:
```
Updated allowance of account:  BigNumber { value: "100000000000" }
```

------
#### renounceOwnership
Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.

* NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner. 

##### Parameters to provide:
None.

Successfully renounced the ownership of the contract.

##### Current State:
CLI: 

```
console.log("Current Owner: ", await alai.owner());
```
Output:
```
Current owner:  0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34v
```

##### Function Call:
CLI:
```
await alai.renounceOwnership();
```
Output:
```

```

##### Updated State:
CLI:
```
console.log("Updated owner :", alai.owner());
```
Output:
```

```



------
#### transfer
Moves `amount` tokens from the caller's account to `to`.

##### Parameters to provide:

`const to = "";` // address of account to transfer tokens to from owner account.
`const amount = 100000000000000;` // number of tokens to transfer (value + 9 0s)

<br>
Transferred amount successfully from 'owner' account to desired wallet by the desired amount.

##### Current State: 
CLI:
```
console.log("Current Balances. Owner: ", await alai.balanceOf(await alai.owner()), ". To Account: ", await alai.balanceOf('0xEF84dE6F1014ab698b4B3B3172F950F251270db4'));
```
Output:
```
Current Balances. Owner:  BigNumber { value: "1000000000000000000" } . To Account:  BigNumber { value: "0" }
```

##### Function Call:
`with 9 0s`
CLI:
```
await alai.transfer('0xCFBF355cAd274F6945efA0a52fEc912aA5180C61', 1000000);
```
Output:
```
{
  hash: '0x47400a960f8c3609b242d11a3b63c67801dd50a5eb7f0f9535615b9f2f19e1d1',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "231834676203" },
  maxPriorityFeePerGas: BigNumber { value: "2500000000" },
  maxFeePerGas: BigNumber { value: "231834676203" },
  gasLimit: BigNumber { value: "54837" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 71,
  data: '0xa9059cbb000000000000000000000000ef84de6f1014ab698b4b3b3172f950f251270db400000000000000000000000000000000000000000000000000000000000f4240',
  r: '0xdb88ccefde5e445e8e0092c1620a9736ff1c4d71a9703d057b99a104996e040a',
  s: '0x595c945f9703ce70611607376b8aae1c3fc65082e7f02d809a9c1af518daeede',
  v: 0,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```

##### Updated State:
CLI:
```
console.log("Updated Balances. Owner: ", await alai.balanceOf(await alai.owner()), ". To Account: ", await alai.balanceOf('0xCFBF355cAd274F6945efA0a52fEc912aA5180C61'));
```
Output:
```
Updated Balances. Owner:  BigNumber { value: "999999999999000000" } . To Account:  BigNumber { value: "1000000" }
```


------

#### transferFrom
Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance.

##### Parameters to provide:

`const from = "";` // address of account to transfer from
`const to = "";` // address of account to transfer to
`const amount = "";` // amount of tokens to be transferred(value + 9 0s)

<br>
Successfully transferred token from `from` account to `to` account by the desired value. 

##### Current State: 
CLI:
```
console.log("Current Balances. From: ", await alai.balanceOf('0xCFBF355cAd274F6945efA0a52fEc912aA5180C61'), ". To Account: ", await alai.balanceOf('0x19E1eA67A1ddA029d36F81C56A999524E06d3ab2'));
```
Output:
```
Current Balances. From:  BigNumber { value: "1000000" } . To Account:  BigNumber { value: "0" }
```

##### Function Call:
CLI:
```
await alai.transferFrom('0xCFBF355cAd274F6945efA0a52fEc912aA5180C61', '0x19E1eA67A1ddA029d36F81C56A999524E06d3ab2', 750000);
```
Output:
```
{
  hash: '0x901fc5c7342ec6d9150e95eab24cb5851b12638e22e4077008fb331b0471c52a',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0xCFBF355cAd274F6945efA0a52fEc912aA5180C61',
  gasPrice: BigNumber { value: "354140081793" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "354140081793" },
  gasLimit: BigNumber { value: "30213" },
  to: '0x19E1eA67A1ddA029d36F81C56A999524E06d3ab2',
  value: BigNumber { value: "0" },
  nonce: 80,
  data: '0x39509351000000000000000000000000cfbf355cad274f6945efa0a52fec912aa5180c61000000000000000000000000000000000000000000000000000000000000c350',
  r: '0xdf3696edb0c71e6d0af0f202291e3f0f32bd95e58881c5de0373168398cd1121',
  s: '0x5cf1ce16aec58ace775e7a833062e333ca339a7a61b63674af7d8afcf57908f5',
  v: 1,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}
```

##### Updated State:
CLI:
```
console.log("Updated Balances. From: ", await alai.balanceOf('0xEF84dE6F1014ab698b4B3B3172F950F251270db4'), ". To Account: ", await alai.balanceOf('0x67013eC9483864AFbBC54452F7D50Fa5176BbC42'));
```
Output:
```
Current Balances. From:  BigNumber { value: "250000" } . To Account:  BigNumber { value: "750000" }
```


------
#### transferOwnership
Transfers ownership of the contract to a new account (`newOwner`).
Can only be called by the current owner. 

##### Parameters to provide:

`const newOwner = "";` // address of new owner.


##### Current State: 
CLI:
```
console.log("Current owner: ", await alai.owner());
```
Output:
```
Current owner:  0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34
```

##### Function Call:
CLI:
```
await alai.transferOwnership('0x214572F9DeBbA517feD78E008A3962E091e58295');
```
Output:
```
{
  hash: '0xac598178f1fe6a8f4f4611e9e7d3b89da502b824c17095a500c985390390a8c9',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x021f54BD5b80A90B50F596D0a2BeC61DdF052f34',
  gasPrice: BigNumber { value: "292013430015" },
  maxPriorityFeePerGas: BigNumber { value: "1500000000" },
  maxFeePerGas: BigNumber { value: "292013430015" },
  gasLimit: BigNumber { value: "29077" },
  to: '0xAC30CC5484D4492348090196bCfB8e42Cf0D48D0',
  value: BigNumber { value: "0" },
  nonce: 73,
  data: '0xf2fde38b000000000000000000000000214572f9debba517fed78e008a3962e091e58295',
  r: '0x6fbf5421d1c67cc15326ea07ebb9c24e9e5e018c69310c689601d04c2399c8a8',
  s: '0x30356b0bd9116ffd3dfda51c34014a2d61e2c8a33ad9e1235a59ae73c5e01553',
  v: 0,
  creates: null,
  chainId: 5,
  wait: [Function (anonymous)]
}

```

##### Updated State:

CLI:
```
console.log("Updated owner: ", await alai.owner());
```
Output:
```
Updated owner:  0x214572F9DeBbA517feD78E008A3962E091e58295
```


------

### Checking Tax functioning

Tax is charged as Tax For Liquidity and Tax For Marketing on transactions when users buy or sell the token on the listed exchange (Uniswap in our case). Whenever a transaction is called on Uniswap, the transaction is routed via the UniswapV2Pair where tax conditions are checked and adjusted. 

```
function _transfer(address from, address to, uint256 amount) internal override {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");
        require(balanceOf(from) >= amount, "ERC20: transfer amount exceeds balance");

        if ((from == uniswapV2Pair || to == uniswapV2Pair) && !inSwapAndLiquify) {
            if (from != uniswapV2Pair) {
                uint256 contractLiquidityBalance = balanceOf(address(this)) - _marketingReserves;
                if (contractLiquidityBalance >= numTokensSellToAddToLiquidity) {
                    _swapAndLiquify(numTokensSellToAddToLiquidity);
                }
                if ((_marketingReserves) >= numTokensSellToAddToETH) {
                    _swapTokensForEth(numTokensSellToAddToETH);
                    _marketingReserves -= numTokensSellToAddToETH;
                    bool sent = payable(marketingWallet).send(address(this).balance);
                    require(sent, "Failed to send ETH");
                }
            }

            uint256 transferAmount;
            if (_isExcludedFromFee[from] || _isExcludedFromFee[to]) {
                transferAmount = amount;
            }
            else {
                require(amount <= maxTxAmount, "ERC20: transfer amount exceeds the max transaction amount");
                if(from == uniswapV2Pair){
                    require((amount + balanceOf(to)) <= maxWalletAmount, "ERC20: balance amount exceeded max wallet amount limit");
                }

                uint256 marketingShare = ((amount * taxForMarketing) / 100);
                uint256 liquidityShare = ((amount * taxForLiquidity) / 100);
                transferAmount = amount - (marketingShare + liquidityShare);
                _marketingReserves += marketingShare;

                super._transfer(from, address(this), (marketingShare + liquidityShare));
            }
            super._transfer(from, to, transferAmount);
        }
        else {
            super._transfer(from, to, amount);
        }
    }
```

In the transfer function, the if statement `if ((from == uniswapV2Pair || to == uniswapV2Pair) && !inSwapAndLiquify)` ensures that either the from or to account has to be uniswapV2Pair. 

Test Transaction: 

##### Contract address: 

`0x7E36b59181e2416Fa9A641b7E1950825a5BF32F4` 
https://goerli.etherscan.io/address/0x7E36b59181e2416Fa9A641b7E1950825a5BF32F4

##### uniswapV2Pair address: 
`0x2a3f79395eb51059ebfFA7103FA745e103F3d3A6`
https://goerli.etherscan.io/address/0x2a3f79395eb51059ebfFA7103FA745e103F3d3A6


First we added liquidity to the pool at transaction https://goerli.etherscan.io/tx/0xbb322e7403327bc26117349319ee901fa95e1bb66172048ce885ac93046df315 from owner wallet. 

Then we called the `postLaunch` function to set taxes in place (1% and 4%) at transaction https://goerli.etherscan.io/tx/0xe7ac607567a2f79852e58ec30dae69f353d0df65d2e5fcb0a7bfb13b79e4dd3c

Now, from wallets `0xCFBF355cAd274F6945efA0a52fEc912aA5180C61`, and `0x19E1eA67A1ddA029d36F81C56A999524E06d3ab2`, ALAI was swapped for 0.02 and 0.5 eth respectively. 


##### Transaction 1:
https://goerli.etherscan.io/tx/0x25a71b9c9ec6314028ecb816780a6b5603bbd8ed3a65d0708b29b196d31f49d8


`From 0x4648a4...34f40491 To 0x4648a4...34f40491 For 0.02 Wrapped Ethe... (WETH...)`
`From 0x4648a4...34f40491 To 0x2a3f79...03F3d3A6 For 0.02 Wrapped Ethe...(WETH...)`
`From 0x2a3f79...03F3d3A6 To 0x7E36b5...a5BF32F4 For 7.963296947 ALAI | Real...(ALAI...)`
`From 0x2a3f79...03F3d3A6 To 0xCFBF35...A5180C61 For 151.302642027 ALAI | Real... (ALAI...)`

Here you can check that out of the 151.3 + 7.9  = `159.2 tokens` transferred from the liquidity pool, 5% tokens (i.e. 7.96 tokens have been added back to liquidity).

Initially, since the token has just launched and contractLiquidityBalance >= numTokensSellToAddToLiquidity, contract executes swapAndLiquify and adds liquidity to the reserve itself. 

`Here, 5% (1% +4%) of transaction i.e. 7.96 tokens transferred back to us as tax as expected.`

```
Condition met inside transfer() function of ALAI contract:

if (contractLiquidityBalance >= numTokensSellToAddToLiquidity) {
                    _swapAndLiquify(numTokensSellToAddToLiquidity);
                }
```

##### Transaction 2 
https://goerli.etherscan.io/tx/0x05616d1a2018fbfb0e409f6552e4a8eaf6a817df20f819d29cd1214bd333f393



Here you can check that out of the 3631.9 + 191.1  = `3823 tokens` transferred from the liquidity pool, 5% tokens (i.e. 191.15 tokens have been added back to liquidity).

Initially, since the token has just launched and contractLiquidityBalance >= numTokensSellToAddToLiquidity, contract executes swapAndLiquify and adds liquidity to the reserve itself. 

`Here, 5% (1% +4%) of transaction i.e. 191.15 tokens transferred back to us as tax as expected.`

```
Condition met inside transfer() function of ALAI contract:

if (contractLiquidityBalance >= numTokensSellToAddToLiquidity) {
                    _swapAndLiquify(numTokensSellToAddToLiquidity);
                }
```

--- 
