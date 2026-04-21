export const create = async (profile) => {
    const transformedProfile = {
        name: profile.firstname + " " + profile.lastname,
        birthdate: profile.dob,
        "program": profile.course + " " + profile.major,
        "studentStatus": profile.status
    }

    const response = await fetch (
        `https://ais-simulated-legacy.onrender.com/api/students`, {
            method: "POST",
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transformedProfile)
        }
    );
    return await response.json();
};
