import {createPost, getPosts} from "../Controllers/PostController"
import {Router} from "express"
import { onlySoldiersAndCommanders } from "../Midllewares/AuthMiddelwares";

const router = Router()
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
router.post("/add", onlySoldiersAndCommanders, createPost)

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
router.get("/get-my-posts", onlySoldiersAndCommanders, getPosts)
export default router