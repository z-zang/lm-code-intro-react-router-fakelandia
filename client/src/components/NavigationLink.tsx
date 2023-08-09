import { NavLink } from 'react-router-dom';
import './styles/NavigationLink.css';

type Props = {
    url: string,
    title: string
}

const NavigationLink = ({ url, title }: Props) => {
    return (
        <NavLink to={url} className={({ isActive }) =>
            isActive ? "nav__link--active" : "nav__link"}>
            {title}
        </NavLink>
    )
}

export default NavigationLink