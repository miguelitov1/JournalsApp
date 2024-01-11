import { Box } from '@mui/material'
import React from 'react'

const drawerWidth = 240;

export const JournalLayeout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

        {/* NavBar */}

        {/* SideBar */}
        
        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >

            {/* ToolBar */}

            { children }

        </Box>

    </Box>
  )
}
