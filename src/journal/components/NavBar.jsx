import { LoginOutlined, LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'


export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px`} 
        }}
    >

        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx={{ mr: 2, display: { sm: 'none' } }}//display en pantallas muy pequeñas va a ser 'none', en emdianas el que viene por defecto
            >
               <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>

                <Typography variant='h6' noWrap component='div'>JournalApp</Typography>

                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>

            </Grid>

        </Toolbar>

    </AppBar>
  )
}
