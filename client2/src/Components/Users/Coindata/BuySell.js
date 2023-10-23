import React from 'react'
import Box from '@mui/material'
const BuySell = () => {
  return (
  
      <> 
          <Box>
          <Box>
                            
                            <Link to='/trade/buysell/buycoin'>Buy</Link>
                                    <Link to='/trade/buysell/sellcoin'>Sell</Link>
                                    <Box> 
                                        <Outlet coins={coins} coinChange={handleCoinChange}></Outlet>
                                    </Box>
            </Box>
            

      </Box>
      
      
      </>
      
      
      
  )
}

export default BuySell