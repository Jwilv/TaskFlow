import { Box, Drawer, Typography } from "@mui/material"
import { Title } from "./components/Title";


export const Sidebar = () => {
    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={() => console.log("cerrando")}
        >
            <Title />

        </Drawer>
    );
}
