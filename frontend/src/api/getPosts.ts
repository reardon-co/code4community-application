import axios from "axios"

export const getPosts = async () => {
    return axios.get('http://localhost:8080/api/posts')
}