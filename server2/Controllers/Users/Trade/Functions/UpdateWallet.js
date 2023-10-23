
const connection = require('../../../../Connection')
const axios = require('axios');


const UpdateWallet =  (userid, coin, backedCoin,inputAmount, inputAmountX, CoinPrice,type,Availablebalance) => {

    return new Promise((resolve, reject) => {

    connection.query(`UPDATE wallet SET ? WHERE UserId = "${userid}" AND currency = "${backedCoin}"`, [{ quantity: Availablebalance - inputAmount }],(err2, result2) => {
            if (err2) throw err2;

            console.log("Deduct money for trade")


            connection.query(
                `SELECT * FROM wallet WHERE  UserId='${userid}' AND currency = '${coin}' `,
                (err, result) => {
                  if (err) throw err;
                  if (result.length) {
        
                    let CoinQuantity = inputAmountX / CoinPrice;
                    let finalCoinQuantity = result[0].quantity + CoinQuantity;
                    

                    let sql = `UPDATE wallet SET ? WHERE UserId = ? AND currency = ?`;
                      connection.query(
                        sql,
                        [
                          { quantity: finalCoinQuantity },
                         userid,
                          coin,
                        ],
                        (err, result) => {
                          if (err) throw err;
                          connection.query(`COMMIT`);
                           resolve(CoinQuantity);
                        
                        })





    }else{
        let CoinQuantity = inputAmountX / CoinPrice;

        let sql = `INSERT INTO wallet (UserId,quantity,currency) VALUES("${userid}","${CoinQuantity}" , "${coin}")`;
        connection.query(sql, (err, result) => {
          if (err) throw err;
          connection.query(`COMMIT`);
          console.log("inside in "); })

          resolve(CoinQuantity);

    }

})

    

})

    
    })
    
    
    
}

module.exports = UpdateWallet;