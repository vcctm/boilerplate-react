import { Box, Typography } from '@mui/material'
import { DarkModeToggle, Logo } from 'components'

export const HomePage = () => {
    return (
        <Box
            display={'flex'}
            width={'100%'}
            height={'100vh'}
            justifyContent={'center'}
            textAlign={'center'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <Logo />
            <Typography mt={2} fontSize={'24px'}>
                <b>REACTv18</b>: BOILERPLATE
            </Typography>
            <Typography maxWidth={300} fontWeight={900} fontSize={'small'}>
                Typescript + MUIv5 + Framer Motion + Recoil + Storybook + Plop +
                Husky + Prettier + Eslint
            </Typography>
            <Box>
                <DarkModeToggle />
            </Box>
        </Box>
    )
}

export default HomePage
