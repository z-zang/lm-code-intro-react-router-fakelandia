import { Link, Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <>
            <header className='header'>
                <h1 className='header__title'>Fakelandia Justice Department</h1>
                <nav className='nav'>
                    <Link to={'home'} className='nav__link'>Home</Link>
                    <Link to={'misdemeanours'} className='nav__link'>Misdemeanours</Link>
                    <Link to={'confess'} className='nav__link'>Confess</Link>
                </nav>
            </header>

            <Outlet />
            <footer className='footer'>
                <p>Copyright Zichao Zang 2023</p>
            </footer>
        </>
    )
}

export default App
