const { Pool } = require("pg");  // Correct way to import Pool

const pool = new Pool({
    user: "postgres",
    password: "Shebin@21",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
