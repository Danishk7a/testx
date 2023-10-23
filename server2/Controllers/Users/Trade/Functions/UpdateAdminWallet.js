const connection = require('../../../../Connection')
const axios = require('axios');


const UpdateAdminWallet =  (backedCoin, fee,feepercentage, inputAmount)=>{

let percentageForAdmin = 60;
let percentageForReferralUser = 40;


    let forAdmin = (percentageForAdmin * fee) / 100;

    // let forReferralUser = (percentageForReferralUser * fee) / 100;


 connection.query(`SELECT * FROM adminWallet WHERE currency = "${backedCoin}"`, (err, result)=>{
        if (err) throw err;
        let preQuantity = result[0].quantity ;
            console.log("look ", preQuantity)   

        if(result.length){

            console.log("Debugging manually")

            

            connection.query(`UPDATE adminWallet SET ? WHERE currency = "${backedCoin}"`, [{ quantity: preQuantity + forAdmin }],(err2, result2)=>{

                console.log("Admin wallet updated")

            }
            
            
            
            
            
            )



           }else{


            connection.query(`INSERT INTO adminWallet (quantity, currency) VALUES("${forAdmin}","${backedCoin}")`, (err, result)=>{
                if (err) throw err;

                console.log("Admin Wallet Updated")




            })

           }






        })


    
    
    
    
    
}

module.exports = UpdateAdminWallet;