import { createPostsController, getPostsController } from "../controllers/posts"
import { Router } from "express"


const postsRouter = Router()

const allPostsRoute =  postsRouter.get('/', getPostsController)
const createPostRoute = postsRouter.post('/', createPostsController)

export default postsRouter