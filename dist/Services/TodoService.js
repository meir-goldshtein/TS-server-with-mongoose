"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodoService = void 0;
const UserModel_1 = require("../Models/UserModel");
const addTodoService = async (userId, todo) => {
    try {
        const user = await UserModel_1.UserModel.findById(userId);
        console.log(user);
        console.log(todo);
        if (!user) {
            throw new Error("user not found");
        }
        const { title, description, done } = todo;
        if (!title || !description || done === undefined) {
            throw new Error("all fields are required");
        }
        user.todos.push(todo);
        await user.save();
        return user.todos;
    }
    catch (error) {
        throw error;
    }
};
exports.addTodoService = addTodoService;
