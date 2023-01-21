import React, { forwardRef, MutableRefObject } from "react"

interface TextInputProps {
    setPostContent: Function
    defaultText: string
    defaultValue?: string
}

export const TextInput = (({ setPostContent, defaultText, defaultValue}: TextInputProps) => {
    return (
        <input 
        type="text" 
        className="w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" 
        placeholder={defaultText}
        defaultValue={defaultValue}
        onChange={(event) => {setPostContent(event.target.value)}}
        autoFocus
        />
    )
})