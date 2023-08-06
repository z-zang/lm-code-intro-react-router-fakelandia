import { FormEvent, useState, useEffect, useContext, Dispatch, SetStateAction } from 'react'
import { MisdemeanourContext } from '../context/MisdemeanourContext'

import SubjectField from './SubjectField'
import ReasonField from './ReasonField'
import DetailsField from './DetailsField'
import usePostMisdemeanour from '../api/usePostMisdemeanour'

import { Misdemeanour, MisdemeanourKind } from '../types/misdemeanours.types'

import './styles/ConfessForm.css'

const ConfessForm = () => {
    const { setMisdemeanours } = useContext(MisdemeanourContext)
    const { data, isLoading, error, postMisdemeanour } = usePostMisdemeanour()
    const isInvalidConfession = data?.success === false

    const [touched, setTouched] = useState(false);
    const [subject, setSubject] = useState('');
    const [reason, setReason] = useState('');
    const [details, setDetails] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const isFormFilled = subject && reason && details

    useEffect(() => {
        if (data && data.success === true && data.justTalked === false) {
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
        setShowMessage(true)
        setTimeout(() => setShowMessage(false), 2000);

    }, [data]);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTouched(true);

        if (isFormFilled) {
            postMisdemeanour({ subject, reason, details })
        }
    }

    const handleFieldChange = (input: string, setFieldState: Dispatch<SetStateAction<string>>) => {
        setFieldState(input);
    }

    return (
        <>
            {isLoading && <div className='loadingMessage'>Processing submission...</div>}
            {showMessage && data?.success && <div className='successMessage'>Valid confession received!</div>}
            {showMessage && (error || isInvalidConfession) && <div className='errorMessage'>{error || 'Invalid Confession.'}</div>}

            <form className='form' onSubmit={(e: FormEvent) => handleFormSubmit(e)}>
                <SubjectField input={subject} setFieldState={setSubject} touched={touched} handleChange={handleFieldChange} />
                <ReasonField input={reason} setFieldState={setReason} touched={touched} handleChange={handleFieldChange} />
                <DetailsField input={details} setFieldState={setDetails} touched={touched} handleChange={handleFieldChange} />

                <input type="submit" value="Confess!" className='form__submit' />
            </form>
        </>


    )
}

export default ConfessForm