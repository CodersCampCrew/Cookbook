import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button component', () => {
    
    test('check the button was render', () => {
      render(<Button/>)

      const buttonElement = screen.getByRole('button');
      
      expect(buttonElement).toBeInTheDocument()
    })

    test('make sure the onClick func is called', () => {
      
      const mockFn = jest.fn()

      render(
      <Button
        onClick={mockFn}
      />)

      const buttonElement = screen.getByRole('button')
      userEvent.click(buttonElement)

      expect(mockFn).toBeCalled()
    })
} )

