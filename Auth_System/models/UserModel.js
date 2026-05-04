import pool from '../config/db.js';
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (userProfile, email, password) => {
    if(email.trim() ==='' ||
       password.trim() === '') {
        const error = new TypeError (
            'Email and Password are required.'
        );
        error.statusCode = 400;
        throw error;
    }

    if(!validator.isEmail(email)) {
        const error = new TypeError ('Invalid email address.');
        error.statusCode = 400;
        throw error;
    }

    if(!validator.isStrongPassword(password)) {
        const error = new TypeError (
            'Password is weak. It must be at least 8 characters long and include a number and a special character.'
        )
        error.statusCode = 400;
        throw error;
    }

    const [user] = await pool.query (
        "SELECT email FROM tblStudent WHERE email = ?", [email]
        );

    if(user.length === 1) {
        const error = new Error (`The "${email}" email is already in use.`);
        error.statusCode = 400;
        throw error;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    /* 
    const response = await fetch (
        'https://ais-simulated-legacy.onrender.com/api/students', {
            method: "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        }
    );
    const result = await response.json;
    */

    const response = await fetch (
        `http://localhost:4000/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        }
    );

    const result = await response.json();

    if (!response.ok) {
        const error = new Error(
            result.message || "Adapter or AIS registration failed"
        );
        error.statusCode = response.status;
        throw error;
    }

    const [newUser] = await pool.query (
        "INSERT INTO tblStudent (email, password) VALUES (?, ?)",
        [email, hashedPassword]
    );

    return newUser;

};



export const login = async (email, password) => {
    if(email.trim() === '' ||
       password.trim() === '') {
        const error = new Error ('Email and Password are required.');
        error.statusCode = 400;
        throw error;
    }

    const [user] = await pool.query (
        "SELECT * FROM tblStudent WHERE email = ?", [email]
    );

    if(user.length === 0) {
        const error = new Error (`An account with email "${email}" does not exist.`);
        error.statusCode = 400;
        throw error;
    }

    if(!bcrypt.compareSync(password, user[0].password)) {
        const error = new Error ('Incorrect password.');
        error.statusCode = 400;
        throw error;
    }

    const token = jwt.sign (
        { id: user[0].id, email: user[0].email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    return token;
};

export const getUser = async (id) => {
    if(parseInt(id) === NaN) {
        throw new Error('Invalid user ID.');
    }

    const [user] = await pool.query (
        "SELECT * FROM tblStudent WHERE id = ?", [id]
    );
    return user;
};
