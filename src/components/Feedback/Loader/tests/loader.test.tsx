import React from 'react';
import { render, screen } from "@testing-library/react"
import {Loader} from "..";

describe('loader component', () => {
    it('should render loader with default props', () => {

        render(<Loader/>);

        const loader = screen.getByRole('loader');
        expect(loader).toHaveStyle('width: 40px; height: 40px;border-color: #1E90FF;');

    })
    it('should render loader with small size', () => {
            
            render(<Loader size="small"/>);
    
            const loader = screen.getByRole('loader');
            expect(loader).toHaveStyle('width: 20px; height: 20px');
    
    })
    it('should render loader with large size', () => {
            
        render(<Loader size="large"/>);

        const loader = screen.getByRole('loader');
        expect(loader).toHaveStyle('width: 50px; height: 50px');

    })
    it('should render loader with custom color and custom styles', () => {
            
        const style = {
            backgroundColor: '#FF0000',
            margin: '5px',
        }
        render(<Loader color="red" style={style}/>);

        const loader = screen.getByRole('loader');
        expect(loader).toHaveStyle('border-color: red;background-color: #FF0000;margin: 5px;');

    })
})