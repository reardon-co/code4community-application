import React, { ReactNode } from "react"

interface TextProps {
    size: "caption" | "body" | "header"
    children: ReactNode
}

export const Text = ({ size, children }: TextProps) => {
    switch (size) {
        case "caption":
            return <p className="text-xs uppercase">{children}</p>
        case "body":
            return <p className="text-base">{children}</p>
        case "header":
            return <h1 className="text-4xl">{children}</h1>
        default:
            return <p className="text-base">{children}</p>
    }
}