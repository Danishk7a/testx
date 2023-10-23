import React from 'react'
import Helpico from '@mui/icons-material/HelpOutlineOutlined';
import { Box, IconButton } from '@mui/material'
const Help = () => {

    return (
        <>
            <Box sx={{ position: 'fixed', bottom: '50px', color: 'white', right: '50px', borderRadius: '23px', width: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', backgroundColor: '#5661FF' }}>

                <IconButton sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: 'white' }}>   <Helpico />&nbsp;Help?</IconButton>
            </Box>

        </>
    )
}

export default Help