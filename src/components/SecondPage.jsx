import { useState } from "react"
import ButtonToTab from "./ButtonToTab"
import UserContent from "./pageContent/userContent/UserContent"
import PostsContent from "./pageContent/postsContent/PostsContent"
import CommentContent from "./pageContent/commentContent/CommentContent"

export default function SecondPage() {

    const [pageContent, setPageContent] = useState("user")

    return (
        <>

            <h1>

                CONTENT

            </h1>

            <div className="nav-container">

                <ButtonToTab children={"user"} setState={() => setPageContent('user')}></ButtonToTab>
                <ButtonToTab children={"posts"} setState={() => setPageContent('posts')}></ButtonToTab>
                <ButtonToTab children={"comment"} setState={() => setPageContent('comment')}></ButtonToTab>

            </div>

            <section>
                {pageContent === 'user' && <UserContent />}
                {pageContent === 'posts' && <PostsContent />}
                {pageContent === 'comment' && <CommentContent />}
            </section>
        </>
    )
}