import e from "express"
import{PostModel, Ipost, Icomment} from "../Models/PostModel"
import{UserModel} from "../Models/UserModel"
import{postDto} from "../Types/Interfaces/dto/reqDto"
import { ObjectId } from "mongoose"

const createPostService = async (userId: string, post: postDto): Promise<Ipost> => {
    try {
        const user = await UserModel.findById(userId)
        if (!user) {
            throw new Error("user not found")
        }

        const { title, content } = post
        if (!title || !content) {
            throw new Error("all fields are required")
        }
        
        const newPost = new PostModel({ title, content })

        newPost.author = user._id as ObjectId
        await newPost.save()

        user.posts.push(newPost._id as ObjectId)
        await user.save()

        return newPost

    } catch (error) {
        throw error
    }
}


const getPostsService = async (userId: string): Promise<any[]> => {
    try {
        const user = await UserModel.findById(userId)
        if (!user) {
            throw new Error("user not found")
        }
        // return user.populate("posts")
        // const posts = PostModel.find({author: user._id})
        const posts = PostModel.find().populate({
            path: "author",
            select: "user_name email",
          }).populate({
            path: "comments.author",
            select: "user_name",
          });
        return posts
    } catch (error) {
        throw error
    }
}


export { createPostService,
    getPostsService
 }