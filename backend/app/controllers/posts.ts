import { addPost, getPosts } from '../services/posts';
import { Request, Response } from 'express';

export const getPostsController = async (req: Request, res: Response) => {
    try {
        const posts = await getPosts(req, res)
        // res.json(posts)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

export const createPostsController = async (req: Request, res: Response) => {
    try {
        const newPost = await addPost(req, res)
    }
    catch (err) {
        res.status(500).send(err)
    }
}