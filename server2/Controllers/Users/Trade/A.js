const connection = require('../../../Connection')
const axios = require('axios');

const WalletUpdateFunction = require('./Functions/WalletUpdateFunction')
const CustomCoin = require('./Functions/CustomCoin')
 const CheckBalance = require('./Functions/CheckBalance')

const A =  async (req, res) => {

    let symbol = req.body.symbol;
    let coin = req.body.coin;
    let backedCoin = req.body.backedCoin;
    let inputAmountX = req.body.amount;
    let isCustomCoin = req.body.isCustomCoin;
    let feepercentage = 0.2;
    let CustomCoinPrice = req.body.Cprice
    let CoinPrice;
    let userid = req.token.userid
    let type = 'buy'


// Fee processing.........
    let fee = (feepercentage * inputAmountX) / 100;
let inputAmount =  inputAmountX + fee;


  






CoinPrice = await CustomCoin(symbol, coin, backedCoin, isCustomCoin, CustomCoinPrice)

console.log("This is Symbol ", symbol , CoinPrice)

    let Availablebalance = await CheckBalance(userid, backedCoin, inputAmount)
    
    console.log("Checking balance ", Availablebalance)


    if(Availablebalance){

        WalletUpdateFunction(userid, coin, backedCoin,inputAmount, inputAmountX, CoinPrice,type,Availablebalance,fee,feepercentage)

    }
   
    

    
    
    
}

module.exports = A;