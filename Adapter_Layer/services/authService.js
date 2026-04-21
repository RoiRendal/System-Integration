import * as AuthAdapter from "../adapters/authAdapter.js";

export const registerStudent = async (studentProfile) => {
    if(studentProfile.firstName === '') {

    };

    return await AuthAdapter.create(studentProfile);
};
