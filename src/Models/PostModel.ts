import mongoose, { ObjectId } from "mongoose";
import { Document, Schema, model } from "mongoose";
import validator from "validator";

interface Icomment extends Document {
    content: string;
    author: ObjectId;
}
interface Ipost extends Document {
    title: string;
    content: string;
    author: ObjectId;
    comments: Icomment[];
}

const commentSchema = new Schema<Icomment>({
    content: {
        type: String,
        required: [true, "content is required"],
        minlength: [3, "content must be at least 3 characters"],
        trim: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "user is required"],
    }
});

const postSchema = new Schema<Ipost>({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [3, "title must be at least 3 characters"],
        trim: true,
    },
    content: {
        type: String,
        required: [true, "content is required"],
        minlength: [3, "content must be at least 3 characters"],
        trim: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "author is required"],
    },
    comments: {
        type: [commentSchema],
        default: [],
    }
},{
    timestamps: true
    });


const PostModel = mongoose.model<Ipost>("post", postSchema);



export { PostModel, Ipost, Icomment}