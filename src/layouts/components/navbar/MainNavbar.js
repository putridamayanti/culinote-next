'use client'

import {useSelector} from "store";
import {AppBar, IconButton, Stack, styled, Toolbar} from "@mui/material";
import {AccountCircleRounded} from "@mui/icons-material";
import Logo from "layouts/components/Logo";

const MainNavbar = () => {
    const themeSetting = useSelector(state => state.theme);

    const AppBarStyled = styled(AppBar)(({ theme }) => ({
        background: theme.palette.background.paper,
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',

        [theme.breakpoints.up('lg')]: {
            minHeight: themeSetting.toolbarHeight,
        },
    }));

    const ToolbarStyled = styled(Toolbar)(({theme}) => ({
        margin: '0 auto',
        width: '100%',
        color: `${theme.palette.text.secondary} !important`,
    }));

    return (
        <AppBarStyled position="sticky" color="default" elevation={0}>
            <ToolbarStyled sx={{ maxWidth: 'lg' }}>
                <Logo/>
                <Stack direction="row" flex={1} justifyContent="end" spacing={2}>
                    <IconButton>
                        <AccountCircleRounded/>
                    </IconButton>
                </Stack>
            </ToolbarStyled>
        </AppBarStyled>
    )
};

export default MainNavbar;