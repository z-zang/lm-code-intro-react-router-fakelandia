import { Dispatch, SetStateAction } from "react"

export type FormFieldProps = {
    input: string,
    touched: boolean,
    setFieldState: Dispatch<SetStateAction<string>>
    handleChange: (subjectInput: string, setFieldState: Dispatch<SetStateAction<string>>) => void
}
