import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button component', () => {
    
    test('check the button was clicked', () => {
      render(<Button/>)

      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement)

      expect(buttonElement).toBeInTheDocument()
    })

} )

