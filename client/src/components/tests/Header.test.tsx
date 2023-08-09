import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '../Header'
import { BrowserRouter } from 'react-router-dom'

test('renders header and nav subcomponents', async () => {
    const { container } = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

    const headerTitle = screen.getByText(/Fakelandia Justice Department/i);
    expect(headerTitle).toBeInTheDocument();

    const navSection = container.getElementsByClassName('nav');
    expect(navSection.length).toBe(1);
})
