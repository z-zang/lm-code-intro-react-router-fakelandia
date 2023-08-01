import { Link, NavLink, Outlet, Navigate } from 'react-router-dom'
import './App.css'

const App = () => {
    // BUG: I added this so the client redirects to /home when you open it.
    // however, it means when I refresh the page on another route, it also goes to /home
    // currently unsure how to fix it.
    Navigate({ to: '/home' })
    return (
        <>
            <header className='header'>
                <Link to={'home'} className='header__title'>
                    <h1>
                        {`Fakelandia Justice Department`}
                    </h1>
                </Link>
                <nav className='nav'>
                    <NavLink to={'home'} className={({ isActive }) =>
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
