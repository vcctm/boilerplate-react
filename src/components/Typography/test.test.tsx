import { render, screen } from '@testing-library/react'

import Typography from '.'

describe('<Typography />', () => {
    it('should render Typography component', () => {
        render(<Typography />)
        expect(screen.getByTestId('typography-id')).toBeInTheDocument()
    })
})
