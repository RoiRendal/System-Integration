/**
 * Maps AIS student records into the portal-facing shape (inverse of registration mapping:
 * name → firstName/lastName, program → course/major, studentStatus → status).
 */
export function aisRecordToPortalView(ais) {
    const name = String(ais.name ?? "").trim();
    const firstSpace = name.indexOf(" ");
    const firstName = firstSpace === -1 ? name : name.slice(0, firstSpace);
    const lastName = firstSpace === -1 ? "" : name.slice(firstSpace + 1).trim();

    const program = String(ais.program ?? "").trim();
    const pSpace = program.indexOf(" ");
    const course = pSpace === -1 ? program : program.slice(0, pSpace);
    const major = pSpace === -1 ? "" : program.slice(pSpace + 1).trim();

    let dob = ais.birthdate;
    if (dob && typeof dob === "string" && dob.includes("T")) {
        dob = dob.slice(0, 10);
    }

    return {
        id: ais._id,
        firstName,
        lastName,
        dob,
        address: ais.address,
        course,
        major,
        status: ais.studentStatus,
        createdAt: ais.createdAt,
        updatedAt: ais.updatedAt,
    };
}
