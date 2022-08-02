import { IconButton } from '@mui/material'
import { MoonIcon } from './Icons/MoonIcon'
import { SunIcon } from './Icons/SunIcon'
import { useRecoilState } from 'recoil'
import { themeAtom } from 'store'

const DarkModeToggle = () => {
    const [theme, setTheme] = useRecoilState(themeAtom)

    const handleSwitchTheme = (prev: 'dark' | 'light') => {
        if (prev === 'dark') {
            setTheme('light')
            return
        } else {
            setTheme('dark')
        }
    }

    return (
        <IconButton
            data-testid="icon-button"
            onClick={() => handleSwitchTheme(theme)}
        >
            {theme === 'light' ? (
                <SunIcon data-testid="sun-icon" />
            ) : (
                <MoonIcon data-testid="moon-icon" />
            )}
        </IconButton>
    )
}

export default DarkModeToggle
