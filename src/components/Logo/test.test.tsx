import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
    it('should be render', () => {
        render(<Logo />)

        expect(screen.getByTestId('logo')).toBeInTheDocument()
    })
})
