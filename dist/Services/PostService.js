"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostService = void 0;
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
