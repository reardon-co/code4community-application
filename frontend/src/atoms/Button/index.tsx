import React, { MouseEventHandler, ReactNode } from "react"
import { Text } from "../Text"

interface ButtonProps {
    label: ReactNode,
    onClick: MouseEventHandler
    disabled?: boolean
}

export const Button = ({ label, onClick, disabled }: ButtonProps) => {
    if (disabled) {
        return (
            <button className="px-3 py-1 bg-gray-500 rounded-md text-white">
                <Text size="body">{label}</Text>
            </button>
        )
    }

    return (
        <button className="px-3 py-1 bg-sky-500 rounded-md text-white" onClick={onClick}>
            <Text size="body">{label}</Text>
        </button>
    )
}