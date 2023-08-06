import { useState, useContext } from "react"
import { MisdemeanourContext } from "../context/MisdemeanourContext"

import MisdemeanoursFilter from "../components/MisdemeanoursFilter"
import MisdemeanoursTable from "../components/MisdemeanoursTable"

const MisdemeanoursPage = () => {
    const { misdemeanours } = useContext(MisdemeanourContext)
    const [filter, setFilter] = useState('')
    const filteredMisdemeanours = misdemeanours.filter((item) => filter ? item.misdemeanour === filter : misdemeanours)

    const handleFilterChange = (selectedFilter: string) => {
        setFilter(selectedFilter)
    }

    return (
        <>
            {!misdemeanours.length && <div>Loading...</div>}
            {!!misdemeanours.length && (
                <>
                    <MisdemeanoursFilter handleFilterChange={handleFilterChange} />

                    <div>{filteredMisdemeanours.length} case(s)</div>

                    <MisdemeanoursTable filteredMisdemeanours={filteredMisdemeanours} />
                </>
            )}


        </>
    )
}

export default MisdemeanoursPage