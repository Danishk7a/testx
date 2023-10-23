const connection = require('../../../../Connection')
const axios = require('axios');
const {v4 : uuidv4} = require('uuid')

const UpdateHistory =  (userid, CoinQuantity, CoinPrice, coin,fee,feepercentage, inputAmount) => {
    
    const orderid =  uuidv4()  
 

    let TH = `INSERT INTO transactionhistory (UserId , quantity , amount,quantityvalue, currency , type,orderid,status,fee,feepercentage,total) VALUES("${userid}", "${CoinQuantity}" , "${CoinPrice}" ,"${CoinQuantity*CoinPrice}", "${coin}" ,"credit","${orderid}","success","${fee}","${feepercentage}","${inputAmount}" )`;

    connection.query(TH, (err, results) => {
        if (err) throw err;
        console.log("Record Updated");
     
      });

  
    
    
    
}

module.exports = UpdateHistory;