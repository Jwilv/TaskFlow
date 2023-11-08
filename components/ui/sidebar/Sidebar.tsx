import { Box, Drawer, Typography, Divider } from "@mui/material"
import { Title } from "./components/Title";
import { ListItems } from "./components/ListItems";
import { useContext } from 'react';
import { UIContext } from "@/context";


export const Sidebar = () => {

    const { openSidebar, closeMenuSidebar } = useContext(UIContext)

    return (
        <Drawer
            anchor="left"
            open={ openSidebar }
            onClose={closeMenuSidebar}
        >
            <Box sx={{ width: 250 }}>
                <Title />
                <ListItems />
                <Divider />
            </Box>
        </Drawer>
    );
}
