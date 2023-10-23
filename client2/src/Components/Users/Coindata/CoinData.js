import React, { useEffect, useState } from 'react'
import { connection, w3cwebsocket as W3CWebSocket } from "websocket";
// import Chart from './Components/CoinData/Chart';
import CoinListBox from './CoinListBox';
import axios from 'axios';
import CryptoPriceList from '../CryptoPriceList';


// const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');

const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade/dogeusdt@trade/btcusdt@trade/lunausdt@trade/bnbusdt@trade/solusdt@trade/xrpusdt@trade/adausdt@trade/ltcusdt@trade/btcbusd@trade/xrpdoge@trade/shibbtc@trade/xrpbtc@trade/neousdt@trade/snxusdt@trade/joeusdt@trade/manausdt@trade/wavesusdt@trade/cakeusdt@trade/pepeusdt@trade/arpausdt@trade/xlmusdt@trade/runeusdt@trade/sxpusdt@trade/gmtusdt@trade/mtlusdt@trade/eosusdt@trade/trxusdt@trade/dotusdt@trade/shibusdt@trade');


// const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker/dogeusdt@ticker/btcusdt@ticker/lunausdt@ticker/bnbusdt@ticker/solusdt@ticker/xrpusdt@ticker/adausdt@ticker/ltcusdt@ticker/btcbusd@ticker/neousdt@ticker/snxusdt@ticker/joeusdt@ticker/manausdt@ticker/wavesusdt@ticker/cakeusdt@ticker/pepeusdt@ticker/arpausdt@ticker/xlmusdt@ticker/runeusdt@ticker/sxpusdt@ticker/gmtusdt@ticker/mtlusdt@ticker/eosusdt@ticker/trxusdt@ticker/dotusdt@ticker/shibusdt@ticker');






client.onopen = () => {
  // console.log('WebSocket Client Connected') ;   
 };

function CoinData(props) {

// console.log("Coin Data render")
  
  const [coin,setcoin] = useState({});

  const [coins, setCoins] = useState([]);
  const [DisbableBtn, setdisbableBtn] = useState(0)
  const disbableBtn = () => {
    setdisbableBtn(1)


  }
  


  
  useEffect(()=>{
    
  client.onmessage = (message) => {
        // console.log(message.s)
        let tempo = JSON.parse(message.data)
        
        
        // console.log(message.s)
      

       
          setcoin(tempo);
       
      
       
     
      
      
        if (tempo.e == 'trade') {
          if(!coins.some((el)=>{
            return el["s"]==tempo.s
          })){
        

            // setTimeout(() => {

       
              setCoins([...coins, { "s": tempo.s, "p": tempo.p, "color": "n" }])
           
            // }, 1000);
          } else {
            let temp = coins
            temp.map((el)=>{
              if(el["s"]==tempo.s){
                if(tempo.p>el["p"])
                  el["color"] = "g"
                if(tempo.p<el["p"])
                  el["color"] = "r"
                el["p"] = tempo.p
              }
           
            })
            
            // setTimeout(() => {

       
              setCoins(temp)
           
            // }, 1000);

            
        
          }
        } else {
                  //  setCoins([...coins, {'c':tempo.c}])
      }
        
        } 
    
   
  },[coin]
   
    
)
  
return (
   
    
      <>
      
     
      {DisbableBtn?<></>:<CoinListBox bg={props.bgcolor} disbableBtn={disbableBtn} DisbableBtn={DisbableBtn} coins={coins}  data={props.on} />}

      {/* <CryptoPriceList/> */}



        </>

  )
}
export default CoinData



