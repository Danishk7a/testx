const connection = require('../../../../Connection')
const axios = require('axios');
const UpdateAdminWallet = require('./UpdateAdminWallet');
const UpdateAdminHistory = require('./UpdateAdminHistory');
const UpdateReferralHistory = require('./UpdateReferralHistory');
const UpdateReferralWallet = require('./UpdateReferralWallet');
const UpdateHistory = require('./UpdateHistory');
const UpdateWallet = require('./UpdateWallet')

const WalletUpdateFunction =  (userid, coin, backedCoin,inputAmount, inputAmountX, CoinPrice,type,Availablebalance,fee,feepercentage)=>{




    connection.query(`START TRANSACTION`, async (err, result) =>  {
        if (err) throw err;


  const  CoinQuantity = await UpdateWallet(userid, coin, backedCoin,inputAmount, inputAmountX, CoinPrice,type,Availablebalance)

  UpdateHistory(userid, CoinQuantity, CoinPrice, coin,fee,feepercentage, inputAmount)

  UpdateAdminWallet(backedCoin, fee,feepercentage, inputAmount)
  UpdateAdminHistory(userid, backedCoin, fee)

    // UpdateReferralWallet()
    // UpdateReferralHistory()
    
  



})
    
}

module.exports = WalletUpdateFunction;