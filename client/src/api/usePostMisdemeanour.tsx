import { useState, useCallback } from "react"

type Props = {
    subject: string,
    reason: string,
    details: string
}

type Data = {
    success: boolean,
    justTalked: boolean,
    message: string
}

const usePostMisdemeanour = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<Data>()
    const [error, setError] = useState('')

    const url = "http://localhost:8080/api/confess"

    const postMisdemeanour = useCallback(async ({ subject, reason, details }: Props) => {
        setIsLoading(true)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                subject: subject,
                reason: reason,
                details: details,
            })
        }

        try {
            const data = await (await fetch(url, requestOptions)).json()
            setData(data)

            setIsLoading(false)
        }
        catch (error) {
            console.log(error)
            setError(error as string)
            setIsLoading(false)
        }
    }, [])

    return { data, isLoading, error, postMisdemeanour }
}

export default usePostMisdemeanour