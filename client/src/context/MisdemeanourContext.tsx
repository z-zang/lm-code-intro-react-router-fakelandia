import { useState, useEffect, createContext, Dispatch, SetStateAction } from 'react'
import { Misdemeanour } from '../types/misdemeanours.types'

type MisdemeanourContextType = {
    misdemeanours: Misdemeanour[],
    setMisdemeanours: Dispatch<SetStateAction<Misdemeanour[]>>
}

type MisdemeanourContextProviderPropsType = {
    children: React.ReactNode[] | React.ReactNode
}

export const MisdemeanourContext = createContext<MisdemeanourContextType>({
    misdemeanours: [],
    setMisdemeanours: () => { }
})

const MisdemeanourContextProvider = ({ children }: MisdemeanourContextProviderPropsType) => {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:8080/api/misdemeanours/50`
            const data = await (await fetch(url)).json()
            setMisdemeanours(data.misdemeanours);
        }
        fetchData()
            .catch(error => console.error(error));
    }, [])

    return (
        <MisdemeanourContext.Provider value={{ misdemeanours, setMisdemeanours }}>
            {children}
        </MisdemeanourContext.Provider>
    )
}

export default MisdemeanourContextProvider;