'use client'

import {usePathname} from "next/navigation";
import {useSelector} from "store";
import {useEffect, useMemo} from "react";
import BuildTheme from "theme";
import MainLayout from "layouts/MainLayout";
import {getIp} from "utils/helper";
import {CssBaseline, ThemeProvider} from "@mui/material";

const RootApp = ({ children }) => {
    const pathname = usePathname();
    const themeSetting = useSelector(state => state.theme);
    const theme = useMemo(() => BuildTheme(themeSetting.activeMode), [themeSetting.activeMode]);

    let Layout = MainLayout;
    //
    // if (pathname.includes('/app')) {
    //     Layout = AppLayout;
    // }

    useEffect(() => {
        getIp();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
                {children}
            </Layout>
        </ThemeProvider>
    )
};

export default RootApp;