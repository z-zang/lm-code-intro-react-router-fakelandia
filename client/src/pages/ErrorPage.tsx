import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            Error: Page not found!
            Return to <Link to={''}>Home</Link>
        </div>
    )
}

export default ErrorPage