type Props = {
    handleFilterChange: (selectedFilter: string) => void
}

const MisdemeanoursFilter = ({ handleFilterChange }: Props) => {
    return (
        <select name="" id="" onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="">All</option>
            <option value="vegetables">Not Eating their Vegetables</option>
            <option value="lift">Speaking in a Lift</option>
            <option value="rudeness">Mild Public Rudeness</option>
            <option value="united">Supporting Manchester United</option>
        </select>
    )
}

export default MisdemeanoursFilter