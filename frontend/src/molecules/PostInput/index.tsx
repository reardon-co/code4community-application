import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { Button } from '../../atoms/Button'
import { TextInput } from '../../atoms/TextInput'
import { PostDataContext } from '../../contexts/postdata'
import { Text } from '../../atoms/Text'

interface PostInputProps {
    
}

export const PostInput = ({}: PostInputProps) => {
    const {posts, setPosts} = useContext(PostDataContext)

    const [postContent, setPostContent] = useState("")
    
    const handleClick = () => {
        if (postContent.length > 0) {
            const newPost = {
                "content": postContent,
                "date": new Date()
            }
            axios.post("http://localhost:8080/api/posts", newPost).then((res) => {
                if (posts) {
                    setPosts([res.data.data, ...posts])
                }
            })
        }
        
    }

    if (postContent.length > 0 && postContent.length <= 128) {
        return (
            <div className='flex flex-row w-full gap-x-2'>
                <TextInput setPostContent={setPostContent} defaultText="Write a post..." defaultValue={postContent} />
                <Button label="Send" onClick={handleClick} />
            </div>
        )
    }
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-row w-full gap-x-2'>
                <TextInput setPostContent={setPostContent} defaultText="Write a post..." defaultValue={postContent} />
                <Button label="Send" onClick={handleClick} disabled />
            </div>
            <Text size="caption">Post must be between 1 and 128 characters long.</Text>
        </div>
    )
    
}