import { getAisStudentsBaseUrl } from "../util/aisEndpoints.js";

export const create = async (profile) => {
    const transformedProfile = {
        name: `${profile.firstName} ${profile.lastName}`.trim(),
        birthdate: profile.dob,
        address: profile.address,
        program: `${profile.course} ${profile.major}`.trim(),
        studentStatus: profile.status,
    };

    const response = await fetch(getAisStudentsBaseUrl(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedProfile),
    });
    const data = await response.json();
    if (!response.ok) {
        const err = new Error(data.error || data.message || "AIS student registration failed");
        err.statusCode = response.status;
        throw err;
    }
    return data;
};
