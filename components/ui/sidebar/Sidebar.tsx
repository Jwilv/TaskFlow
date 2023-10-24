import { Box, Drawer, Typography, Divider } from "@mui/material"
import { Title } from "./components/Title";
import { ListItems } from "./components/ListItems";


export const Sidebar = () => {
    return (
        <Drawer
            anchor="left"
            open={false}
            onClose={() => console.log("cerrando")}
        >
            <Box sx={{ width: 250 }}>
                <Title />
                <ListItems />
                <Divider />
            </Box>
        </Drawer>
    );
}
