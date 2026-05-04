import * as UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
    const { firstName, lastName, dob, address, course, major, status, email, password } = req.body;

    try {
        const userProfile = {firstName, lastName, dob, address, course, major, status};
        const user = await UserModel.createUser(userProfile, email, password);
        res.status(201).json({
            success: true,
            message: [{result: 'Account created successfully!', user}]
        });
    } catch(e) {
        console.error(e);
        const status = e.statusCode >= 400 && e.statusCode < 600 ? e.statusCode : 500;
        res.status(status).json({
            success: false,
            message: e.statusCode ? e.message : "Internal Server Error",
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await UserModel.login(email, password);
        res.status(200).json({
            success: true,
            message: [{result: 'Login successful!', token}]
        });
    } catch(e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};
