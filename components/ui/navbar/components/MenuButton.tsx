import { IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const MenuButton = () => {
    return (
        <IconButton
            size='large'
            edge="start"
        >
            <MenuOutlinedIcon color='primary' />
        </IconButton>
    )
}
