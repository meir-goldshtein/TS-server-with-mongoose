"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostController_1 = require("../Controllers/PostController");
const express_1 = require("express");
const AuthMiddelwares_1 = require("../Midllewares/AuthMiddelwares");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /posts/add:
 *   post:
 *     summary: Add a post
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *
 *     responses:
 *       201:
 *         description: A successful response
 */
router.post("/add", AuthMiddelwares_1.onlySoldiersAndCommanders, PostController_1.createPost);
/**
 * @swagger
 * /posts/get-my-posts:
 *   get:
 *     summary: get the connected user posts
 *     tags:
 *       - Posts
 *     responses:
 *       201:
 *         description: A successful response
 */
//get the connected user posts
router.get("/get-my-posts", AuthMiddelwares_1.onlySoldiersAndCommanders, PostController_1.getPosts);
exports.default = router;
