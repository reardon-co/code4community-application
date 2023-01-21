import React, { ReactNode, useContext, useState } from "react"
import { PostDataContext } from "../../contexts/postdata"
import { Post, PostProps } from "../../molecules/Post"

interface PostsProps {
    postList: PostProps[]
}

const BasePosts = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col gap-4 w-full">
            {children}      
        </div>
    )
}

export const Posts = () => {
    const { posts } = useContext(PostDataContext)

    if (posts) {
        posts.sort((a, b) => {
            return Date.parse(b.date) - Date.parse(a.date)
        })

        return (
            <BasePosts>
                {posts.map((post, index) => {
                    return (
                        <Post content={post.content} date={post.date} key={index} />
                    )
                })}
            </BasePosts>
        )
    }
    return (
        <BasePosts>
            <Post content={"Posts are loading..."} date={new Date().toString()} />
        </BasePosts>
    )
}