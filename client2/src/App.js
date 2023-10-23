import React from 'react'
import Registration from './Components/Users/Registration'
import Login from './Components/Users/Login'
import HomePage from './Components/Home/HomePage'
import UserKyc from './Components/Users/UserKyc/UserKyc'
import Logout from './Components/Users/Logout'
import UserPanel from './Pages/UserPanel'
import Dashboard from './Pages/Dashboard'
import TradeHistory from './Components/Users/TradeHistory'
import Security from './Components/Users/Security'
import TransactionHistory from './Components/Users/TransactionHistory'
import Wallet from './Components/Users/Wallet/Wallet'
import User from './Components/Admin/User'
import Test from './Test'
import Limit from './Components/Users/Coindata/Limit'
import Market from './Components/Home/Market'

import Stoplimit from './Components/Users/Coindata/StopLimit'
import Profile from './Components/Users/UserKyc/Profile'

import { render } from "react-dom";  
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Trade from './Pages/Trade'
import BuyCoin from './Components/Users/Coindata/BuyCoin'
import AdminPanel from './AdminPage/AdminPanel'
import AllUsers from './Components/Admin/AllUsers'
import Airdrop from './Components/Admin/Airdrop'
import AddCustomCoin from './Components/Admin/AddCustomCoin'
import Vcode from './Components/Users/Vcode'
import Chart from './Components/Users/Chart'
import Referral from './Components/Users/Referral'
import AirdropContest from './Components/Users/AirdropContest'
import RequestCall from './Components/Home/RequestCall'
import Addmoney from './Components/Users/Wallet/Addmoney'
import Withdraw from './Components/Users/Wallet/Withdraw'
import Showwallet from './Components/Users/Wallet/Showwallet'
import WalletNew from './Components/Users/Wallet/WalletNew'
import Data24hr from './Components/Users/Data24hr'

import Google2FA from './Components/Users/Google2FA'
import CustomChart from './Components/Users/CustomChart'
import OpenOrder from './Components/Users/OpenOrder';
import OrderHistory from './Components/Users/OrderHistory';

import AdminDashboard from './Components/Admin/AdminDashboard'
import { SellCoin } from './Components/Users/Coindata/SellCoin'
import UserProfile from './Components/Users/UserKyc/UserProfile'
import Page1 from './Components/Home/ListingForm/Page1'
import Page2 from './Components/Home/ListingForm/Page2'
import Page3 from './Components/Home/ListingForm/Page3'
import AddFund from './Components/Admin/AddFund'


function App() {
  return (
    <>
     
      <BrowserRouter>
     
    <Routes>
      
      <Route exat path='/' element={<HomePage/>}/>
      <Route exat path='/market' element={<Market/>}/>
      <Route exat path='/userpanel' element={<UserPanel/>}>
      

      <Route exact path="/userpanel/userkyc" element={<Profile/>}/>
      <Route exact path="/userpanel/userprofile" element={<UserProfile/>}/>
      <Route exact path="/userpanel/addmoney" element={<Addmoney/>}/>
      
      
      {/* <Route exact path="/userpanel/transactionhistory" element={<TransactionHistory/>}/> */}
      
      <Route exact path="/userpanel/wallet" element={<Showwallet/>}>
      {/* <Route exact path="/userpanel/wallet" element={<WalletNew/>}> */}
      
     
      </Route>

      <Route exact path="/userpanel/addmoney" element={<Addmoney/>}/>
      <Route exact path="/userpanel/withdraw" element={<Withdraw/>}/>


      <Route exact path="/userpanel/tradehistory" element={<TradeHistory/>}/>
      <Route exact path="/userpanel/referral" element={<Referral/>}/>
      <Route exact path="/userpanel/userdashboard" element={<Dashboard/>}/>
      <Route exact path="/userpanel/security" element={<Security/>}/>
       
      
      </Route>
      {/* Limit and Market */}
   
      <Route exact path="/trade" element={<Trade/>}>
            <Route exact path="/trade/openorder" element={<OpenOrder />} />
            <Route exact path="/trade/buysell" element={<BuyCoin/>}/>
            <Route exact path="/trade/buysell/buycoin" element={<BuyCoin/>}/>
      <Route exact path="/trade/buysell/sellcoin" element={<SellCoin/>}/>
      <Route exact path="/trade/orderhistroy" element={<OrderHistory/>}/>
      <Route exact path="/trade/tradehistory" element={<TradeHistory/>}/>
      <Route exact path="/trade/showwallet" element={<Showwallet/>}/>
      </Route>


      {/* <Route exact path="/Logout" element={<DataFile/>}/> */}
      <Route exact path="/Logout" element={<Logout/>}/>
      
      {/* <Route exact path="/trade" element={<Trade/>}/> */}
          <Route exact path="/chart" element={<Chart />} />
          <Route exact path="/registration" element={<Registration/>} />
      <Route exact path="/registration/:id" element={<Registration/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/testoy" element={<Test/>}/>
      <Route exact path="/bycoin" element={<BuyCoin/>}/>
      <Route exact path="/vcode" element={<Vcode/>}/>
      <Route exact path="/airdropcontest" element={<AirdropContest/>}/>
      <Route exact path="/data24" element={<Data24hr/>}/>

      <Route exact path="/google2fa" element={<Google2FA/>}/>
      <Route exact path="/customchart" element={<CustomChart/>}/>
     
          <Route exact path="/reqcall" element={<RequestCall />}> </Route>
          <Route exact path="/reqcall/page1" element={<Page1 />}/>
          <Route exact path="/reqcall/page2" element={<Page2 />}/>
          <Route exact path="/reqcall/page3" element={<Page3 />}/>
            
         

      {/* admin routes */}
      <Route exat path='/admin' element={<AdminPanel/>}>
      <Route exat path='/admin/allusers' element={<AllUsers/>}/>
      <Route exat path='/admin/admindashboard' element={<AdminDashboard/>}/>
      <Route exat path='/admin/airdrop' element={<Airdrop/>}/>
      <Route exat path='/admin/addcoin' element={<AddCustomCoin/>}/>
      <Route exat path='/admin/addfund' element={<AddFund/>}/>
      

        </Route>

          </Routes>
         
  </BrowserRouter>
    
    

    
    </>
    
    )
}

export default App