import { Misdemeanour } from '../types/misdemeanours.types'

import './styles/MisdemeanoursTableRow.css'

type Props = {
    item: Misdemeanour,
    key: number
}

const MisdemeanourTableRow = ({ item }: Props) => {
    const misdemeanourDescriptions = {
        'vegetables': "Not Eating their Vegetables",
        'lift': "Speaking in a Lift",
        'rudeness': "Mild Public Rudeness",
        'united': "Supporting Manchester United"
    }
    return (
        <tr>
            <td className="table__cell">{item.citizenId}</td>
            <td className="table__cell">{item.date}</td>
            <td className="table__cell table__misdemeamourWrapper">
                {misdemeanourDescriptions[item.misdemeanour]}
                <img src='https://picsum.photos/100/' className="table__img" />
            </td>
        </tr>
    )
}

export default MisdemeanourTableRow