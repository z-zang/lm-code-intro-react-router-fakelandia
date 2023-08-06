import { FormFieldProps } from "../types/FormFieldProps"

const DetailsField = ({ input: details, touched, setFieldState, handleChange }: FormFieldProps) => {
    return (
        <div className='form__field'>
            <span className='form__fieldWrapper'>
                <label htmlFor="details">Details:</label>
                {!details && touched && <div className='form__warning'>Details cannot be empty</div>}
            </span>

            <textarea name="details" id="" cols={30} rows={10} value={details} onChange={(e) => handleChange(e.target.value, setFieldState)}></textarea>
        </div>
    )
}

export default DetailsField