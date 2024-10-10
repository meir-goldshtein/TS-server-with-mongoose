import mongoose, { ObjectId } from "mongoose";
import { Document, Schema, model } from "mongoose";
import validator from "validator";

interface Icomment extends Document {
    content: string;
    user: ObjectId;
}
interface Ipost extends Document {
    title: string;
    content: string;
    comments: Icomment[];
}

const commentSchema = new Schema<Icomment>({
    content: {
        type: String,
        required: [true, "content is required"],
        minlength: [3, "content must be at least 3 characters"],
        trim: true,
    },
    user: {
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
    comments: {
        type: [commentSchema],
        default: [],
    }
},{
    timestamps: true
    });


const PostModel = mongoose.model<Ipost>("post", postSchema);



export { PostModel, Ipost, Icomment}