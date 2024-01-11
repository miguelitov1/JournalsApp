import { Box } from '@mui/material'
import { NavBar } from '../components';

const drawerWidth = 240;

export const JournalLayeout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

        <NavBar drawerWidth={ drawerWidth }/>

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
