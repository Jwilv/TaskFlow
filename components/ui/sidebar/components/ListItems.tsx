import { List } from "@mui/material"
import { Item } from "./Item"

const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts']

export const ListItems = () => {
    return (
        <List>
            {
                menuItems.map((text, index) => (
                    <Item key={index} text={text} item={index} />
                ))
            }
        </List>
    )
}
