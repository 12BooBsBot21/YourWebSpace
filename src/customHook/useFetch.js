import { useEffect, useState } from "react";


export default function useFetch ( url ) {
        const [data, setData] = useState(null)
        const [loading, setLoading] = useState(true)

        
        
   const makeURL = `https://jsonplaceholder.typicode.com/${url}`
    useEffect(() => {
        if (!url) return;

        async function fetchData  () {
            try {
                const respones = await fetch(makeURL)
                const json = await respones.json()
                setData(json)
            }
            catch(error) {
                console.error('ероор данных',error)
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return({data, loading})
}