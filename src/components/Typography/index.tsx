import { Box, Typography as MuiTypography } from '@mui/material'

export const Typography = () => {
    return (
        <Box data-testid="typography-id">
            <MuiTypography fontSize={32} fontWeight={900}>
                The quick fox jumps over the lazy frog - Black
            </MuiTypography>
            <MuiTypography fontSize={32} fontWeight={700}>
                The quick fox jumps over the lazy frog - Bold
            </MuiTypography>
            <MuiTypography fontSize={32} fontWeight={600}>
                The quick fox jumps over the lazy frog - Semi-Bold
            </MuiTypography>
            <MuiTypography fontSize={32} fontWeight={500}>
                The quick fox jumps over the lazy frog - Normal
            </MuiTypography>
            <MuiTypography fontSize={32} fontWeight={300}>
                The quick fox jumps over the lazy frog - Thin
            </MuiTypography>
        </Box>
    )
}

export default Typography
