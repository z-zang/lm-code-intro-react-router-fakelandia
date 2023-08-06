import MisdemeanourTableRow from './MisdemeanourTableRow'
import { Misdemeanour } from '../types/misdemeanours.types'

import './styles/MisdemeanoursTable.css'

type Props = {
    filteredMisdemeanours: Misdemeanour[]
}

const MisdemeanoursTable = ({ filteredMisdemeanours }: Props) => {
    return (
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
                    <MisdemeanourTableRow item={item} key={index} />
                ))}
            </tbody>
        </table>
    )
}

export default MisdemeanoursTable