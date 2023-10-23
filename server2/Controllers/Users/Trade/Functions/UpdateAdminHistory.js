const connection = require('../../../../Connection')
const axios = require('axios');


const UpdateAdminHistory =  (userid, backedCoin, fee)=>{

    let percentageForAdmin = 60;
    let forAdmin = (percentageForAdmin * fee) / 100;


 connection.query(`INSERT INTO adminWalletHistory (userid, currency,quantity) VALUES ( "${userid}","${backedCoin}","${forAdmin}"
 )`, (err, result)=>{

if (err) throw err;

console.log("Admin Wallet record Updated")


 })


    
    
    
    
    
}

module.exports = UpdateAdminHistory;