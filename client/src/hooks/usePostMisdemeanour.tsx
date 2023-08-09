import { useState, useContext, useEffect } from "react"
import { MisdemeanourContext } from "../context/MisdemeanourContext"
import { Misdemeanour, MisdemeanourKind } from '../types/misdemeanours.types'


type Data = {
    success: boolean,
    justTalked: boolean,
    message: string
}

type PostData = {
    id: number,
    subject: string,
    reason: string,
    details: string
}

const usePostMisdemeanour = () => {
    const { setMisdemeanours } = useContext(MisdemeanourContext)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<Data>()
    const [error, setError] = useState('')
    const [postData, setPostData] = useState<PostData>({
        id: 0,
        subject: '',
        reason: '',
        details: 'string'
    })

    const url = "http://localhost:8080/api/confess"

    useEffect(() => {
        const postNewConfession = async () => {
            setIsLoading(true)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    subject: postData.subject,
                    reason: postData.reason,
                    details: postData.details,
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
        }
        postData.id !== 0 && postNewConfession()

    }, [postData])

    useEffect(() => {
        console.log('useposts data', data)
        if (data && data.success === true && data.justTalked === false) {
            const newMisdemeanour: Misdemeanour = {
                citizenId: 99999,
                misdemeanour: postData.reason as MisdemeanourKind,
                date: new Date().toJSON().slice(0, 10).split('-').reverse().join('/')
            }
            setMisdemeanours(prev => [newMisdemeanour, ...prev])
        }
    }, [data])

    return { data, isLoading, error, setPostData }
}

export default usePostMisdemeanour