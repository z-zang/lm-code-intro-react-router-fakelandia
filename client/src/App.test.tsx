import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app routes', async () => {
    render(<App />)
    const headerTitle = screen.getAllByText(/Fakelandia Justice Department/i)
    expect(headerTitle).toBeInTheDocument()
    // Fakelandia Justice Department


    //                     Home


    //                     Misdemeanours

    //                     Confess

    //         <main className='main'>
    //             <Outlet />
    //         </main>
    // const
})