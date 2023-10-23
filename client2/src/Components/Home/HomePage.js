import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useContext, useEffect, useState, useReducer } from 'react'
import Context from '../../hooks/useTheme';
import HomePageReDesign from './HomePageReDesign'
import Help from './Help'


import Boxes from './Boxes'
const HomePage = () => {
  
   
  const reducer = (state, action) => {

    switch(action.type){

        case "update":
            return action.payload
        default:
            throw new Error()
    }


}

const [state,dispatcher] = useReducer(reducer,{color:'#ffffff'})
  
  return (
   
    <Context.Provider value={{
      color:state.color,
      dispatcher : dispatcher
  }}>
    <div style={{ backgroundColor: 'white' }}>
   <Header/>
        {/* <Main color={state.color} ></Main> */}
        <HomePageReDesign/>
   
   <Footer color={state.color}></Footer>
   <Help/>
      </div>

      </Context.Provider>
  )
} 

export default HomePage