import {Typography, Box, Stack} from "@mui/material";
import RecipeCard from "components/cards/RecipeCard";
import Grid from '@mui/material/Grid2';

export default function TrendingRecipe() {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ paddingTop: 10, paddingBottom: 10 }}>
            <Box sx={{ width: { xl: '40%', sm: '90%' } }}>
                <Typography variant="h1" textAlign="center">Trending Recipe</Typography>
                <Grid container spacing={3}>
                    {Array(8).fill('').map((e, i) => (
                        <Grid key={i} size={{ xs: 12, md: 4, lg: 3 }}>
                            <RecipeCard />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    )
}