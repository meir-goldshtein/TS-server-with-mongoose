"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsService = exports.createPostService = void 0;
const PostModel_1 = require("../Models/PostModel");
const UserModel_1 = require("../Models/UserModel");
const createPostService = async (userId, post) => {
    try {
        const user = await UserModel_1.UserModel.findById(userId);
        if (!user) {
            throw new Error("user not found");
        }
        const { title, content } = post;
        if (!title || !content) {
            throw new Error("all fields are required");
        }
        const newPost = new PostModel_1.PostModel({ title, content });
        newPost.author = user._id;
        await newPost.save();
        user.posts.push(newPost._id);
        await user.save();
        return newPost;
    }
    catch (error) {
        throw error;
    }
};
exports.createPostService = createPostService;
const getPostsService = async (userId) => {
    try {
        const user = await UserModel_1.UserModel.findById(userId);
        if (!user) {
            throw new Error("user not found");
        }
        // return user.populate("posts")
        // const posts = PostModel.find({author: user._id})
        const posts = PostModel_1.PostModel.find().populate({
            path: "author",
            select: "user_name email",
        }).populate({
            path: "comments.author",
            select: "user_name",
        });
        return posts;
    }
    catch (error) {
        throw error;
    }
};
exports.getPostsService = getPostsService;
