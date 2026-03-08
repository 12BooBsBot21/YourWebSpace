import useFetch from "../../../customHook/useFetch"
import WindowLoading from "../../loader/WindowLoading"
import s from './UserContent.module.css' 

export default function UserContent () {
    const { data, loading } = useFetch('users')

    const actualLoader = loading || !data
    if(actualLoader) return <WindowLoading />


    return(
        <WindowLoading>
            <div className={s.container}>
                <ul className={s.grid}>
                    {data && data.map((user) => (
                        <li key={user.id} className={s.card}>
                            <div className={s.avatar}>
                                {user.name.charAt(0)}
                            </div>

                            <div className={s.mainInfo}>
                                <h3 className={s.name}>{user.name}</h3>
                                <p className={s.email}>{user.email}</p>
                                <p className={s.phone}>{user.phone}</p>
                            </div>

                            <div className={s.company}>
                                <small>Company</small>
                                <p>{user.company.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </WindowLoading>
    )
}