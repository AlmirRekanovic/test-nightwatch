import Knex from 'knex';
import dotenv from 'dotenv';


let knexClient;

knexClient = Knex({
   // client:
    connection:{
        host:process.env.DB_HOST,
        username:"",
        password:"",
        database:"",
        ssl:{
            rejectUnauthorized:false,
        },
    },
    pool: {min:0, max:20},
});
export default knexClient;