import React from 'react'
type ButtonType = {
    children: React.ReactNode
    className: string,
    onClick: () => void
}
function Button({ className, onClick, children }: ButtonType) {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}

export default Button