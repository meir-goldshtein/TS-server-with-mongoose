import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todo", {
            
        })
        console.log("connected to mongo db")
    } catch (error) {
        
    }
}

export {connectToDB}