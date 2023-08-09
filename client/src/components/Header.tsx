import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import './styles/Header.css';

const Header = () => {
    return (
        <header className='header'>
            <Link to={''} className='header__title'>
                <h1>Fakelandia Justice Department</h1>
            </Link>
            <nav className='nav'>
                <NavigationLink url={''} title={'Home'} />
                <NavigationLink url={'misdemeanours'} title={'Misdemeanours'} />
                <NavigationLink url={'confess'} title={'Confess'} />
            </nav>
        </header>
    )
}

export default Header