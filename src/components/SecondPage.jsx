import ButtonToTab from "./ButtonToTab"


export default function SecondPage() {
    return (
        <>

            <h1>

                CONTENT

            </h1>

            <div>

                <ButtonToTab children={"user"}></ButtonToTab>
                <ButtonToTab children={"posts"}></ButtonToTab>
                <ButtonToTab children={"comment"}></ButtonToTab>

            </div>
        </>
    )
}