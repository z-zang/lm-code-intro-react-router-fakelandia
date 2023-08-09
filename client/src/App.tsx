import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
        </>
    )
}

export default App
