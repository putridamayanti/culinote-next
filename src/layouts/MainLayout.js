import MainNavbar from "layouts/components/navbar/MainNavbar";
import {Box, styled} from "@mui/material";
import Background from '/public/images/background/main.svg';

const MainLayout = ({ children }) => {
    const ContainerStyled = styled(Box)(({ theme }) => ({
        minWidth: '100%',
        minHeight: '100%',
        background: theme.palette.background.paper,
        backgroundImage: `url("/images/background/main.svg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }));

    return (
        <>
            <MainNavbar/>
            <ContainerStyled>
                { children }
            </ContainerStyled>
        </>
    )
};

export default MainLayout;