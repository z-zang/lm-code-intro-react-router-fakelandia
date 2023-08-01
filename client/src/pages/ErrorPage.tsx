import { Link } from 'react-router-dom'

type Props = {}

const ErrorPage = (props: Props) => {
    return (
        <div>
            Error: Page not found!
            Return to <Link to={'home'}>Home</Link>
        </div>
    )
}

export default ErrorPage