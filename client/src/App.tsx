import { Link, NavLink, Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <>
            <header className='header'>
                <Link to={''} className='header__title'>
                    <h1>Fakelandia Justice Department</h1>
                </Link>
                <nav className='nav'>
                    <NavLink to={''} className={({ isActive }) =>
                        isActive ? "nav__link--active" : "nav__link"}>
                        Home
                    </NavLink>
                    <NavLink to={'misdemeanours'} className={({ isActive }) =>
                        isActive ? "nav__link--active" : "nav__link"}>
                        Misdemeanours
                    </NavLink>
                    <NavLink to={'confess'} className={({ isActive }) =>
                        isActive ? "nav__link--active" : "nav__link"}>
                        Confess
                    </NavLink>
                </nav>
            </header>

            <main className='main'>
                <Outlet />
            </main>
        </>
    )
}

export default App
