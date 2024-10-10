"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const todoSchema = new mongoose_2.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [3, "title must be at least 3 characters"],
        trim: true,
    },
    done: {
        type: Boolean,
        required: [true, "done is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minlength: [3, "description must be at least 3 characters"],
        trim: true,
    }
});
const userSchema = new mongoose_2.Schema({
    user_name: {
        type: String,
        required: [true, "user name is required"],
        minlength: [3, "user name must be at least 3 characters"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [8, "password must be at least 8 characters"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        validate: [validator_1.default.isEmail, "invalid email"],
        trim: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["soldier", "commander", "admin", "user"],
        required: [true, "role is required"],
    },
    area: {
        type: String,
        enum: ["center", "north", "south", "east", "west"],
        required: [true, "area is required"],
    },
    units: {
        type: [Number],
        required: [true, "units is required"],
    },
    todos: {
        type: [todoSchema],
        default: [],
    },
    posts: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: "post",
        default: [],
    }
}, {
    timestamps: true
});
// יצירת אינדקס ייחודי על שדה האימייל
userSchema.index({ email: 1 }, { unique: true });
const UserModel = mongoose_1.default.model("user", userSchema);
exports.UserModel = UserModel;
