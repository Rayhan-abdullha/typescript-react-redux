import { ReactNode } from "react"

interface PropTypes {
    bgColor: string
    fontSize: string
    children: ReactNode
}
const Button = ({ bgColor, fontSize, children }: PropTypes) => {
    return (
        <button style={{ background: bgColor, fontSize }}>{ children}</button>
    )
}

export default Button