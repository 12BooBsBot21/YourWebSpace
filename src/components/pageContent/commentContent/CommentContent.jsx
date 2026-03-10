import useFetch from "../../../customHook/useFetch"
import WindowLoading from "../../loader/WindowLoading"
import s from './ComementContent.module.css'

export default function CommentContent () {
    console.log(s)
const {data: comments, loading} = useFetch("comments")

    return(
        <>
            <WindowLoading>
                <div className={s.commentsSection}> 
                    
                        {comments && comments.map((comment) => (
                            <div key={comment.id} className={s.commentItem}>
                            <span className={s.commentEmail}>{comment.email}</span>
                            <p className={s.commentBody}>{comment.body}</p>
                            </div>
                        ))}
                    
                </div>
            </WindowLoading> 
        </>
    )
}