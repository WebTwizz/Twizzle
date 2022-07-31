import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {Tooltip} from '..';

describe('Tooltip Component', () => {
    it('should render', () => {
        render(<Tooltip position="TOP" tooltipText={'Hello World!'}>Hover over me</Tooltip>);
        userEvent.hover(screen.getByText('Hover over me'));
        expect(screen.getByText('Hello World!')).toBeInTheDocument();
    });
});