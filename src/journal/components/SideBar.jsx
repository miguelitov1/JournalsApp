import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const SideBar = ({ draweWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: draweWidth }, flexShrink: { sm: 0 }}}
    >

        <Drawer
            variant='permanent' //puede ser 'temporary' si quiero ocultarno o mostrarlo de manera condicional
            open //siempre va a ser true al menos que le expecifique lo contrario (open={ false })
            sx={{
                display: { sx: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: draweWidth }
            }}
        >

            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Miguel Visintini
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />    
                                    <ListItemText secondary={ 'Est labore commodo mollit aliqua ' } />    
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
