import { Link, Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <header>
                <div>Justice for Fakelandia!</div>
                <nav>
                    <Link to={'home'} className=''>Home</Link>
                    <Link to={'misdemeanours'} className=''>Misdemeanours</Link>
                    <Link to={'confess'} className=''>Confess</Link>
                </nav>
            </header>
            <Outlet />
            <footer>
                Copyright Zichao Zang 2023
            </footer>
        </>
    )
}

export default Root
