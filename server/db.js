const pool = require("pg").pool;
const pool =new pool({
    user:"postgres",
    password:"Shebin@21",
    host:"localhost",
    port: 5432,
    database : "perntodo"
});