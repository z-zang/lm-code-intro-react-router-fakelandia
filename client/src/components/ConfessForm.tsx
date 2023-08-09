import { useState, useEffect, Dispatch, SetStateAction, FormEvent } from 'react'
import SubjectField from './SubjectField'
import ReasonField from './ReasonField'
import DetailsField from './DetailsField'
import usePostMisdemeanour from '../hooks/usePostMisdemeanour'

const ConfessForm = () => {
    const { data, isLoading, error, setPostData } = usePostMisdemeanour();
    const isInvalidConfession = data?.success === false

    const [touched, setTouched] = useState(false);
    const [subject, setSubject] = useState('');
    const [reason, setReason] = useState('');
    const [details, setDetails] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const isFormFilled = subject && reason && details;

    useEffect(() => {
        setTouched(false)
        setSubject('')
        setReason('')
        setDetails('')
        !!data && setShowMessage(true)
        setTimeout(() => setShowMessage(false), 2000);
    }, [data]);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTouched(true);

        if (isFormFilled) {
            setPostData(prev => ({ id: prev.id + 1, subject, reason, details }))
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