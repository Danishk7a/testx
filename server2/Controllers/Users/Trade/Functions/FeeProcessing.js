const connection = require('../../../../Connection')
const axios = require('axios');


const CustomCoin = async (symbol, coin, backCoin, isCustomCoin,CustomCoinPrice) => {

 
 
    if (isCustomCoin) {
    
    
        return CustomCoinPrice
    } else {
        

        const Cp = await axios.get(
            `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
          );
        //   console.log(Cp.data.price);
        return Cp.data.price;


   }

    
    
    
    
    
}

module.exports = CustomCoin;