import { Box } from '@mui/material'
import Head from 'next/head'

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

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
}
