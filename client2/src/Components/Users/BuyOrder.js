import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BuyOrder = ({ bgcolor }) => {
  const [orderdata, setorderdata] = useState(0)


  useEffect(() => {
  
    const getDataOrder = async () => {

      const response = await axios.get(
        'https://api.binance.com/api/v3/allOrders',
        {
          params: {
            symbol: 'BTCUSDT'
          }
        }
      );
      const orders = response.data;
      console.log("This is ORDERS ",orders);


    }
getDataOrder()

},[])

  

  return (
    <>
      <div>
        <div
          style={{
            fontSize: '14px',
            marginBottom: '10px',
            backgroundColor: bgcolor == '#ffffff' ? '#363BE6' : '#1B202E',
            padding: '10px',
            color: bgcolor == '#ffffff' ? 'White' : 'grey',
          }}
        >
          Buy Order Book
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>Price</div>
          <div>Amount</div>
          <div>Total</div>
        </div>

        {/* Raw Fake Data=================================================================================================================== */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5vh',
          }}
        >
          <div style={{ color: 'green' }}>1711.8</div>
          <div>0.8676</div>
          <div>2344.90</div>
        </div>

        {/* Raw Fake Data=================================================================================================================== */}

        {/* {orderdata && orderdata.map((e) => {
                    return <>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>{orderdata.Price}</div>
                  <div>{orderdata.amount}</div>
                  <div>{orderdata.Total}</div>
                        </div>
                    
                    </>
                })} */}
      </div>
    </>
  )
}

export default BuyOrder
