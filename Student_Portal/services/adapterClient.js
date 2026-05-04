const adapterBase = () =>
    (process.env.ADAPTER_URL || "http://localhost:4000").replace(/\/$/, "");

async function getJson(path) {
    const url = `${adapterBase()}${path}`;
    const response = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
        const err = new Error(body.message || `Adapter error (${response.status})`);
        err.statusCode = response.status;
        throw err;
    }
    return body;
}

/** AIS → adapter → portal: list students as portal DTOs */
export function listStudentsFromAdapter() {
    return getJson("/portal/students");
}

export function getStudentFromAdapter(studentId) {
    return getJson(`/portal/students/${encodeURIComponent(studentId)}`);
}
