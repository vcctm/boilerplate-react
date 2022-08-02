import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import DarkModeToggle from '.'

describe('<DarkModeToggle />', () => {
    test('should render darkmode', () => {
        render(
            <RecoilRoot>
                <DarkModeToggle />
            </RecoilRoot>,
        )
        const component = screen.getByTestId('icon-button')
        expect(component).toBeInTheDocument()
    })
})
