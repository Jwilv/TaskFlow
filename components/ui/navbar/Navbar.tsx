import { AppBar, Toolbar } from '@mui/material'
import { MenuButton, TitleBar } from './components'
import { Sidebar } from '..'

export const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <MenuButton />
                <TitleBar /> 
                <Sidebar /> 
            </Toolbar>
        </AppBar>
    )
}
