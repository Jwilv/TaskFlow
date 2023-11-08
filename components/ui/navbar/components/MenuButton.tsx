import { IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { UIContext } from '@/context';

export const MenuButton = () => {

    const { openMenuSidebar } = useContext(UIContext);

    return (
        <IconButton
            size='large'
            edge="start"
            onClick={openMenuSidebar}
        >
            <MenuOutlinedIcon color='primary' />
        </IconButton>
    )
}
