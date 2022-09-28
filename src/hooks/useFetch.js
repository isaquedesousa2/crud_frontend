import { useState, useEffect } from 'react'

const useFetchGet = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function api(){
            await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => setData(response))
        }
        api()
    }, [])

    return data
}

const useFetchPost = ({user_id, body}) => {

    useEffect(() => {
        async function api(){
            const response = await fetch(`http://127.0.0.1:8000/api/v1/users/${user_id}/images/uploadfiles`, {
                method: 'POST',
                body: body
            })
            console.log(response.status)
        }
        api()
    }, [])
}

export {
    useFetchGet,
    useFetchPost,
}