import ButtonToTab from './ButtonToTab'


export default function StartPage({ setState }) {


    return (
        <>
            <h1>Your Web Space</h1>
            <ButtonToTab children={'START'} setState={setState}></ButtonToTab>
        </>
    )
}