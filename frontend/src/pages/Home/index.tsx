import React, { useState } from "react"
import {PostDataContext, PostDataProvider } from "../../contexts/postdata"
import { PostProps } from "../../molecules/Post"
import { HomeTemplate } from "../../templates/HomeTemplate"

const samplePosts: PostProps[] = [
    // {
    //     content: "This is post #1",
    //     date: new Date()
    // },
    // {
    //     content: "This is post #2",
    //     date: new Date()
    // },
    // {
    //     content: "This is post #3",
    //     date: new Date()
    // }
] 

interface HomeProps {

}

export const Home = ({}: HomeProps) => {

    return (
        <PostDataProvider>
            <HomeTemplate />
        </PostDataProvider> 
    )
}