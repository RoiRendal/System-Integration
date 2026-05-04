import * as AdapterClient from "../services/adapterClient.js";

function sendError(res, error) {
    const status =
        error.statusCode >= 400 && error.statusCode < 600
            ? error.statusCode
            : 500;
    res.status(status).json({
        success: false,
        message: error.message || "Student Portal error",
    });
}

export const listStudents = async (req, res) => {
    try {
        const payload = await AdapterClient.listStudentsFromAdapter();
        res.json(payload);
    } catch (error) {
        sendError(res, error);
    }
};

export const getStudent = async (req, res) => {
    try {
        const payload = await AdapterClient.getStudentFromAdapter(
            req.params.studentId
        );
        res.json(payload);
    } catch (error) {
        sendError(res, error);
    }
};
