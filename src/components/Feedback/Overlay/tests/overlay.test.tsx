import React from 'react';
import { render, screen } from '@testing-library/react';
import { Overlay } from '../';
import userEvent from '@testing-library/user-event';

describe('overlay component', () => {
    it('should render overlay', () => {
            
            render(<Overlay />);
    
            const overlay = screen.getByRole('overlay');
            expect(overlay).toBeVisible();
    
    })
    it('should adapt custom onClick behaviour', () => {
        const click = jest.fn();

        render(<Overlay onClick={click}/>);

        const overlay = screen.getByRole('overlay');

        userEvent.click(overlay);
        expect(click).toHaveBeenCalled();

    })
})