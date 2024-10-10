"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const PostService_1 = require("../Services/PostService");
const createPost = async (req, res) => {
    try {
        if (!req.user) {
            throw new Error("Unauthorized while adding post");
        }
        const userId = req.user.userId;
        const post = req.body;
        const data = await (0, PostService_1.createPostService)(req.user.userId, req.body);
        res.status(201).json({ error: false, message: "post created", data });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "could not create post", 'error': error.message });
    }
};
exports.createPost = createPost;
