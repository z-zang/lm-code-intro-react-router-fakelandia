import { useState } from "react"
import { useMisdemeanourContext } from "../context/MisdemeanourContext"
import './styles/MisdemeamourPage.css'

const MisdemeanoursPage = () => {
    const { misdemeanours } = useMisdemeanourContext()
    const [filter, setFilter] = useState('')
    const filteredMisdemeanours = misdemeanours.filter((item) => filter ? item.misdemeanour === filter : misdemeanours)

    const misdemeanourDescriptions = {
        'vegetables': "Not Eating their Vegetables",
        'lift': "Speaking in a Lift",
        'rudeness': "Mild Public Rudeness",
        'united': "Supporting Manchester United"
    }

    const handleFilterChange = (selectedFilter: string) => {
        setFilter(selectedFilter)
    }

    return (
        <>
            {!misdemeanours.length && <div>Loading...</div>}

            {!!misdemeanours.length && (

                <>
                    <select name="" id="" onChange={(e) => handleFilterChange(e.target.value)}>
                        <option value="">All</option>
                        <option value="vegetables">Not Eating their Vegetables</option>
                        <option value="lift">Speaking in a Lift</option>
                        <option value="rudeness">Mild Public Rudeness</option>
                        <option value="united">Supporting Manchester United</option>
                    </select>

                    <div>{filteredMisdemeanours.length} case(s)</div>

                    <table className="table">
                        <thead className="table__heading">
                            <tr>
                                <th>Citizen Id</th>
                                <th>Date</th>
                                <th>Misdemeanour</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMisdemeanours.map((item, index) => (
                                <tr key={index}>
                                    <td className="table__cell">{item.citizenId}</td>
                                    <td className="table__cell">{item.date}</td>
                                    <td className="table__cell table__misdemeamourWrapper">
                                        {misdemeanourDescriptions[item.misdemeanour]}
                                        <img src='https://picsum.photos/100/' className="table__img" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}


        </>
    )
}

export default MisdemeanoursPage