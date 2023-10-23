import { Box } from '@mui/material'
import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

export const Layout = ({ children, title = 'Task App' }: Props) => {
    return (
        <Box sx={{ flexFlow: '1' }}>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar /> 
            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
}
