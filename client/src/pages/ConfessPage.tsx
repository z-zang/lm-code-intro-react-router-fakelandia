import { FormEvent, useState } from 'react'
import { useMisdemeanourContext } from '../context/MisdemeanourContext'
import { Misdemeanour, MisdemeanourKind } from '../types/misdemeanours.types'
import './styles/ConfessPage.css'

const ConfessPage = () => {
    const { setMisdemeanours } = useMisdemeanourContext()
    const [touched, setTouched] = useState(false)

    const [subject, setSubject] = useState('')
    const [reason, setReason] = useState('')
    const [details, setDetails] = useState('')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const isFormFilled = subject && reason !== 'default' && details

    const postData = async () => {
        const url = "http://localhost:8080/api/confess"
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                subject: subject,
                reason: reason,
                details: details,
            })
        };

        try {
            const data = await (await fetch(url, requestOptions)).json()
            if (data.success === false) {
                setError(data.message || 'Unsuccessful request.')
            }

            if (data.success === true && data.justTalked === false) {
                setSuccess(true)
                setTimeout(() => setSuccess(false), 2000)
                const newMisdemeanour: Misdemeanour = {
                    citizenId: 99999,
                    misdemeanour: reason as MisdemeanourKind,
                    date: new Date().toJSON().slice(0, 10).split('-').reverse().join('/')
                }
                setMisdemeanours(prev => [newMisdemeanour, ...prev])
            }

            setTouched(false)
            setSubject('')
            setReason('')
            setDetails('')

        } catch (error) {
            console.log(error)
            setError(error as string)
        }

    }

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTouched(true)

        if (isFormFilled) {
            setSuccess(false)
            postData()
        }
    }

    const handleSubjectChange = (subjectInput: string) => {
        setSubject(subjectInput)
    }
    const handleReasonChange = (reasonInput: string) => {
        setReason(reasonInput)
    }
    const handleDetailsChange = (detailsInput: string) => {
        setDetails(detailsInput)
    }

    return (
        <>
            <div className='description'>
                <p>It's very difficult to catch people committing misdemeaours so we appreciate it when citizens confess to us directly.</p>
                <p>However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>
            </div>

            {success && <div className='successMessage'>Valid confession received!</div>}
            {error && <div className='errorMessage'>{error}</div>}


            <form className='form' onSubmit={(e: FormEvent) => handleFormSubmit(e)}>
                <div className='form__field'>
                    <label htmlFor="subject">Subject</label>
                    <span className='form__fieldWrapper'>
                        <input type="text" name="subject" id="" placeholder='Input' value={subject} onChange={(e) => handleSubjectChange(e.target.value)} />
                        {!subject && touched && <div className='form__warning'>Subject cannot be empty</div>}
                    </span>
                </div>

                <div className='form__field'>
                    <label htmlFor="reason">Reason for contact:</label>
                    <span className='form__fieldWrapper'>
                        <select name="reason" id="" defaultValue="" value={reason} onChange={(e) => handleReasonChange(e.target.value)}>
                            <option value="" hidden>Select...</option>
                            <option value="vegetables">Not Eating Your Vegetables</option>
                            <option value="rudeness">Mild Public Rudeness</option>
                            <option value="lift">Speaking in a Lift</option>
                            <option value="united">Supporting Manchester United</option>
                            <option value="just-talk">I just want to talk!</option>
                        </select>
                        {!reason && touched && <div className='form__warning'>Please select a reason</div>}
                    </span>
                </div>

                <div className='form__field'>
                    <span className='form__fieldWrapper'>
                        <label htmlFor="details">Details:</label>
                        {!details && touched && <div className='form__warning'>Details cannot be empty</div>}
                    </span>

                    <textarea name="details" id="" cols={30} rows={10} value={details} onChange={(e) => handleDetailsChange(e.target.value)}></textarea>
                </div>
                <input type="submit" value="Confess!" className='form__submit' />
            </form>

        </>
    )
}

export default ConfessPage