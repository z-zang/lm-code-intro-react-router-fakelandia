import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NavigationLink from '../NavigationLink'
import { BrowserRouter } from 'react-router-dom'

test('renders link as active when url matches route', async () => {
    render(
        <BrowserRouter>
            <NavigationLink url={''} title={'home'} />
        </BrowserRouter>
    );
    const homeNavlink = screen.getByText(/Home/i);
    expect(homeNavlink).toBeInTheDocument();
    expect(homeNavlink).toHaveClass('nav__link--active');
})


test('renders link as inactive when url is different to route', async () => {
    render(
        <BrowserRouter>
            <NavigationLink url={'differentUrl'} title={'Home'} />
        </BrowserRouter>
    );

    const homeNavlink = screen.getByText(/Home/i);
    expect(homeNavlink).toBeInTheDocument();
    expect(homeNavlink).toHaveClass('nav__link');
})
