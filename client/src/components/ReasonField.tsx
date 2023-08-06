import { FormFieldProps } from "../types/FormFieldProps"

const ReasonField = ({ input: reason, touched, setFieldState, handleChange }: FormFieldProps) => {
    return (
        <div className='form__field'>
            <label htmlFor="reason">Reason for contact:</label>
            <span className='form__fieldWrapper'>
                <select name="reason" id="" value={reason} onChange={(e) => handleChange(e.target.value, setFieldState)}>
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
    )
}

export default ReasonField