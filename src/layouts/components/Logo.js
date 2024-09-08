'use client'

import {Stack, useMediaQuery} from "@mui/material";
import Image from "next/image";
import {useSelector} from "store";

const Logo = () => {
    const themeSetting = useSelector((state) => state.theme);
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const isMiniSidebar = themeSetting.isMiniSidebar;
    const logoSize = {
        width: smDown ? 100 : isMiniSidebar && !themeSetting.isMiniSidebarHover ? 40 : 160,
        height: smDown ? 30 : isMiniSidebar && !themeSetting.isMiniSidebarHover ? 40 : 60
    };
    const logo = isMiniSidebar && !themeSetting.isMiniSidebarHover ? '/images/logo/logo-icon.svg' : '/images/logo/logo.svg';

    return (
        <Stack justifyContent="center" alignItems="center">
            <Image src={logo} alt="logo" width={logoSize.width} height={logoSize.height} priority/>
        </Stack>
    )
};

export default Logo;