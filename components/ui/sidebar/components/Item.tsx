import { ListItem, ListItemIcon, ListItemText } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

interface Props {
    text: string,
    item: number,
}

export const Item = ({ text, item }: Props) => {
    return (
        <ListItem>
            <ListItemIcon>
                {
                    item % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />
                }
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}
