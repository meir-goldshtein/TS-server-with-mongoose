import { NewUserDto } from "../Types/Interfaces/dto/reqDto"
import bcrypt from "bcrypt"
import {Iuser, UserModel} from "../Models/UserModel"

const createUser = async (user: NewUserDto) => {
    try {
        console.log(user)
        const{user_name, password, email , role, area, units} = user
        if (!user_name || !password || !email || !role || !area || !units) {
            throw new Error("All fields are required");
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const dbUser = new UserModel({user_name, password: hashedPassword,email,  role, area, units})
        await dbUser.save()
        console.log("user added")
        return dbUser      
    } catch (error) {
        console.log(error)
        throw error
    }
} 


const getAllUsers = async (): Promise<Iuser[]> => {
    try {
        const users = await UserModel.find({})
        if (!users) {
            throw new Error("No users found")
        }
        return users
    } catch (error) {
        console.log(error)
        throw error
    }
}

export {
    createUser,
    getAllUsers
}