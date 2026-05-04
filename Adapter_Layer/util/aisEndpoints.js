/** Base URL for AIS student collection (no trailing slash). */
export function getAisStudentsBaseUrl() {
    return (
        process.env.AIS_STUDENTS_URL ||
        "https://ais-simulated-legacy.onrender.com/api/students"
    );
}
