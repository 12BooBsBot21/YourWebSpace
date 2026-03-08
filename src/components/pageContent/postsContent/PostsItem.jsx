import { useState } from "react";
import useFetch from "../../../customHook/useFetch";
import s from './PostsContent.module.css' 


export default function PostItem ({ post }) {
    const [showComment, setShowComments] = useState(false)
    const {data: comments, loading} = useFetch( showComment ? `comments?postId=${post.id}` : null)

    return (
        <div className={s.postsCard}>
            <h3 className={s.title} onClick={() => setShowComments(!showComment)}>
                {post.title}
                <span className={s.arrow}>{showComment ? '▲' : '▼'}</span>
            </h3>
            <p className={s.body}>{post.body}</p>

            {showComment && (
                <div className={s.commentsSection}>
                    <h4 className={s.commentsTitle}>Comments:</h4>
                    {loading && <p className={s.loaderSmall}>Loading</p>}
                     {comments && comments.map(comment => (
                        <div key={comment.id} className={s.commentItem}>
                            <span className={s.commentEmail}>{comment.email}</span>
                            <p className={s.commentBody}>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

