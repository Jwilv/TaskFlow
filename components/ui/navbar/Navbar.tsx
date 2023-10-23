import { AppBar, Toolbar } from '@mui/material'
import { MenuButton, TitleBar } from './components'

export const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <MenuButton />
                <TitleBar /> 
            </Toolbar>
        </AppBar>
    )
}
