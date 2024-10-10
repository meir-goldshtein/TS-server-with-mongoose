import { createPostService, getPostsService } from "../Services/PostService";
import {postDto, RequestWithToken} from "../Types/Interfaces/dto/reqDto"
import {Request, Response} from "express"


const createPost = async (req: RequestWithToken, res: Response) => {
    try { 
        if (!req.user) {
            throw new Error("Unauthorized while adding post")
        }
        const userId = req.user.userId
        const post: postDto = req.body
        const data = await createPostService(req.user.userId, req.body)
        res.status(201).json({error: false, message: "post created", data})

    } catch (error: any) {
        console.log(error)
        res.status(500).json({message: "could not create post", 'error': error.message})
    }
}

const getPosts = async (req: RequestWithToken, res: Response) => {
    try {
        if (!req.user) {
            throw new Error("Unauthorized while adding post")
        }
        const userId = req.user.userId
        const data = await getPostsService(req.user.userId)
        res.status(200).json({error: false, message: "success getting posts", data})
    } catch (error) {
        res.status(500).json({message: "could not get posts", 'error': error})
    }
}

export {
    createPost,
    getPosts
}