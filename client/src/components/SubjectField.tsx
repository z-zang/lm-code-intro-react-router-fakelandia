import { FormFieldProps } from "../types/FormFieldProps"

const SubjectField = ({ input: subject, touched, setFieldState, handleChange }: FormFieldProps) => {
    return (
        <div className='form__field'>
            <label htmlFor="subject">Subject</label>
            <span className='form__fieldWrapper'>
                <input type="text" name="subject" id="" placeholder='Input' value={subject} onChange={(e) => handleChange(e.target.value, setFieldState)} />
                {!subject && touched && <div className='form__warning'>Subject cannot be empty</div>}
            </span>
        </div>
    )
}

export default SubjectField