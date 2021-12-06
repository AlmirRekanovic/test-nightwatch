import dotenv from 'dotenv';
dotenv.config({path:'.env'});

export const mainUser = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
};