const connection = require('../../../../Connection');
const axios = require('axios');

const CheckBalance = (userid, backedCoin, Amount) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM wallet WHERE Userid ='${userid}' AND currency ='${backedCoin}'`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                if (result.length) {
                    if (result[0].quantity > Amount) {
                        let quantity = result[0].quantity;
                        console.log("THIS IS BALANCE: ", quantity);
                        resolve(quantity);
                    } else {
                        console.log("INSUFFICIENT BALANCE");
                        resolve(0);
                    }
                } else {
                    resolve(0);
                }
            }
        });
    });
};

module.exports = CheckBalance;
