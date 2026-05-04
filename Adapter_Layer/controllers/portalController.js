import * as PortalService from "../services/portalService.js";

function sendError(res, error) {
    const status =
        error.statusCode >= 400 && error.statusCode < 600
            ? error.statusCode
            : 500;
    res.status(status).json({
        success: false,
        message: error.message || "Portal adapter error",
    });
}

export const listStudents = async (req, res) => {
    try {
        const data = await PortalService.listStudentsForPortal();
        res.json({ success: true, data });
    } catch (error) {
        sendError(res, error);
    }
};

export const getStudent = async (req, res) => {
    try {
        const data = await PortalService.getStudentForPortal(
            req.params.studentId
        );
        res.json({ success: true, data });
    } catch (error) {
        sendError(res, error);
    }
};
