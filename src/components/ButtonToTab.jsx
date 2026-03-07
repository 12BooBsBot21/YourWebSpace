


export default function ButtonToTab ({ children, setState }) {
    return (
        <button onClick={setState} >{children}</button>
    )
}