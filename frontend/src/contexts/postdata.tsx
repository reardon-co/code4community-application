import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { getPosts } from "../api/getPosts";
import { PostProps } from "../molecules/Post";


interface PostDataContextType {
    posts: PostProps[] | null
    setPosts: Function
}

interface PostDataContextProps {
    children: ReactNode
}

export const PostDataContext = createContext<PostDataContextType>({
    posts: [],
    setPosts: () => {}
})

export const PostDataProvider = ({ children }: PostDataContextProps) => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const req = getPosts()
        req.then((res) => setPosts(res.data.data))
    }, [])

    return (
        <PostDataContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostDataContext.Provider>
    )
}
