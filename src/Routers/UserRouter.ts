const { register, getUsers, setSettings } = require("../Controllers/UserController");
import express from "express";

const router = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a user
 *     tags:   
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *               area:
 *                 type: string
 *               units:
 *                 type: number
 *             required:
 *               - user_name
 *               - password
 *               - role
 *               - area
 *               - units
 *           example:
 *             user_name: "israel israeli"
 *             password: "1234"
 *             email: "israel@israeli.com"              
 *             role: "soldier"
 *             area: "center"
 *             units: 8200
 *     responses:
 *       201:
 *         description: A successful response
 *       400:
 *         description: Bad request
 */


router.post("/register", register)

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags:   
 *       - User
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad request
 */

router.get("/", getUsers)

router.patch("/settings", setSettings)

export default router;