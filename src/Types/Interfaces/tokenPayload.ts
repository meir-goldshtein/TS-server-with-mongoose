import {JwtPayload} from "jsonwebtoken"

interface TokenPayload extends JwtPayload {
    userId: string
    user_name: string
    role: "soldier" | "commander" | "admin" | "user"
}

export default TokenPayload