import * as AuthService from "../services/authService.js";

export const registerStudent = async (req, res) => {
    const {firstName, lastName, dob, address, course, major, status} = req.body;
    try {
        const studentProfile = {
            firstName, lastName, dob, address, course, major, status
        };

        const result = await AuthService.registerStudent(studentProfile);
        res.status(201).json({
            success: true,
            message: result
        });
    } catch (error) {
        const status = error.statusCode >= 400 ? error.statusCode : 500;
        res.status(status).json({
            success: false,
            message: error.message || "An error occurred while registering the student",
        });
    }
};
