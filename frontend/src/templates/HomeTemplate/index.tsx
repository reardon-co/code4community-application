import React from "react"
import { Text } from "../../atoms/Text"
import { PostProps } from "../../molecules/Post"
import { PostInput } from "../../molecules/PostInput"
import { Posts } from "../../organisms/Posts"

interface HomeTemplateProps {
    postList: PostProps[]
}

export const HomeTemplate = () => {
    return (
        <div className="w-1/2 flex flex-col items-center gap-y-4 m-auto">
            <Text size="header">code4community Chat Board</Text>
            <PostInput />
            <Posts />
        </div>
    )
}