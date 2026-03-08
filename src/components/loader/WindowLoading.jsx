import { useState, useEffect } from "react"
import s from './WindowLoading.module.css'

export default function WindowLoading ({ children }) {
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false)
        }, 2500)

        return () => clearTimeout(timer)

    }, [])

    if(showLoader) {
        return (
            <div className={s.wrapper}>
                <h2 className={s.text}>Загрузка<span>...</span></h2>
            </div>
        );
    }


    return children
}