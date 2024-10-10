import mongoose from "mongoose";
import { Document, Schema, model, ObjectId } from "mongoose";
import validator from "validator";

interface Itodo extends Document {
    title: string;
    done: boolean;
    description: string;
}

interface Iuser extends Document {
    user_name: string;
    password: string;
    email: string;
    role: string;
    area: string;
    units: number[] | number;
    todos: Itodo[] ;
    posts : ObjectId[];
 }

const todoSchema = new Schema<Itodo>({
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

const userSchema = new Schema<Iuser>({
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
        validate: [validator.isEmail, "invalid email"],
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
        type: [mongoose.Schema.Types.ObjectId],
        ref: "post",
        default: [],
    }
},
{
timestamps: true
});

// יצירת אינדקס ייחודי על שדה האימייל
userSchema.index({ email: 1 }, { unique: true });


const UserModel = mongoose.model<Iuser>("user", userSchema);

export { UserModel, Iuser, Itodo}