import * as PortalAdapter from "../adapters/portalAdapter.js";

export const listStudentsForPortal = () => PortalAdapter.fetchAllStudents();

export const getStudentForPortal = (studentId) =>
    PortalAdapter.fetchStudentById(studentId);
