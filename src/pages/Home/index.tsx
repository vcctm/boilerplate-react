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
            <Typography fontSize={'24px'} fontWeight={'bold'}>
                React Boilerplate
            </Typography>
            <Typography>
                Typescript + MUIv5 + Framer Motion + Recoil + Storybook + Plop
            </Typography>
            <Box>
                <DarkModeToggle />
            </Box>
        </Box>
    )
}

export default HomePage
