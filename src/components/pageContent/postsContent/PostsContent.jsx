import useFetch from "../../../customHook/useFetch"
import WindowLoading from "../../loader/WindowLoading"
import PostItem from "./PostsItem"

export default function PostsContent () {
    const {data: posts, loading} = useFetch('posts')
    if (loading) return <WindowLoading />

    return(
        <WindowLoading>
            <div>
                {posts && posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        </WindowLoading>
    )
}