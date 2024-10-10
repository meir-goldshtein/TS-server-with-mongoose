"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const AuthService_1 = require("../Services/AuthService");
const login = async (req, res) => {
    try {
        const token = await (0, AuthService_1.login)(req.body);
        res.cookie("token", token).json({ error: false, message: "login success" });
    }
    catch (error) {
        res.status(500).json({ message: "could not login", "error": true, "details": error.message });
    }
};
exports.login = login;
const logout = async (req, res) => {
    try {
        res.clearCookie("token").json({ message: "logged out" });
    }
    catch (error) {
        res.status(500).json({ message: "could not logout", "error": true, "details": error.message });
    }
};
exports.logout = logout;
