import express from "express";
import {addTodo} from "../Controllers/TodoController";
import {onlyCommanders, onlySoldiersAndCommanders} from "../Midllewares/AuthMiddelwares";
const router = express.Router();


/**
 * @swagger
 * /todos/add:
 *   post:
 *     summary: Add a todo
 *     tags:
 *       - Todos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               done:
 *                 type: boolean
 *               description:
 *                 type: string
 *             required:
 *               - title
 *               - done
 *               - description
 *                
 *     responses:
 *       201:
 *         description: A successful response
 */
router.post("/add", onlySoldiersAndCommanders, addTodo)

export default router;