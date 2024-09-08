import BlankCard from "components/cards/BlankCard";
import Image from "next/image";
import {Box, IconButton, Stack, Typography} from "@mui/material";

export default function RecipeCard() {
    return (
        <BlankCard>
            <Box sx={{ height: 150, position: 'relative' }}>
                <Image
                    src="/images/dummy/food1.jpg" alt={`pic`}
                    fill
                    style={{ borderRadius: 10, objectFit: 'cover' }}/>
            </Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: '10px 20px'}}>
                <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Nasi Goreng</Typography>
            </Stack>
        </BlankCard>
    )
}