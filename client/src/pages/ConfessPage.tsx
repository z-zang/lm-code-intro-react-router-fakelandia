import ConfessForm from "../components/ConfessForm"

const ConfessPage = () => {
    return (
        <>
            <div className='description'>
                <p>It's very difficult to catch people committing misdemeaours so we appreciate it when citizens confess to us directly.</p>
                <p>However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>
            </div>
            <ConfessForm />
        </>
    )
}

export default ConfessPage