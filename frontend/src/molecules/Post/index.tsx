import React from "react"
import { Text } from "../../atoms/Text"

export interface PostProps {
    content: string
    date: string
}

export const Post = ({ content, date }: PostProps) => {

    return (
        <div className="flex flex-col gap-y-2 outline outline-gray-500 px-4 rounded-md py-4 w-full">
            <Text size="body">{content}</Text>
            <Text size="caption">{new Date(date).toLocaleString()}</Text>
        </div>
    )
}