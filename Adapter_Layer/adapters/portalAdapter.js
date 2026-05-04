import { getAisStudentsBaseUrl } from "../util/aisEndpoints.js";
import { aisRecordToPortalView } from "../transforms/aisToPortalStudent.js";

async function readJsonOrThrow(response) {
    const data = await response.json();
    if (!response.ok) {
        const err = new Error(
            data.error || data.message || "AIS request failed"
        );
        err.statusCode = response.status;
        throw err;
    }
    return data;
}

export async function fetchAllStudents() {
    const response = await fetch(getAisStudentsBaseUrl(), {
        method: "GET",
        headers: { Accept: "application/json" },
    });
    const data = await readJsonOrThrow(response);
    if (!Array.isArray(data)) {
        const err = new Error("Unexpected AIS response for student list");
        err.statusCode = 502;
        throw err;
    }
    return data.map(aisRecordToPortalView);
}

export async function fetchStudentById(studentId) {
    const response = await fetch(`${getAisStudentsBaseUrl()}/${studentId}`, {
        method: "GET",
        headers: { Accept: "application/json" },
    });
    const data = await readJsonOrThrow(response);
    if (data == null || typeof data !== "object" || !data._id) {
        const err = new Error("Student not found");
        err.statusCode = 404;
        throw err;
    }
    return aisRecordToPortalView(data);
}
