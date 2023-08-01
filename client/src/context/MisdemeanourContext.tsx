import { useState, useEffect, createContext, useContext } from 'react'
import { Misdemeanour } from '../types/misdemeanours.types'

type MisdemeanourContextType = {
    misdemeanours: Misdemeanour[],
    setMisdemeanours: React.Dispatch<React.SetStateAction<Misdemeanour[]>>
}

const MisdemeanourContext = createContext<MisdemeanourContextType>({
    misdemeanours: [],
    setMisdemeanours: () => { }
})

type Props = {
    children: React.ReactNode[] | React.ReactNode
}

const MisdemeanourContextProvider = ({ children }: Props) => {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:8080/api/misdemeanours/50`
            const data = await (await fetch(url)).json()
            setMisdemeanours(data.misdemeanours);
        }
        fetchData()
            .catch(console.error);
    }, [])

    return (
        <MisdemeanourContext.Provider value={{ misdemeanours, setMisdemeanours }}>
            {children}
        </MisdemeanourContext.Provider>
    )
}

export const useMisdemeanourContext = () => useContext(MisdemeanourContext);

export default MisdemeanourContextProvider;