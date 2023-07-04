const knex = require("knex");
const knexFile = require("../knexfile");

const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexFile[environment]);
// const pg = require("knex")({
//   client: "pg",
//   connection: process.env.PG_CONNECTION_STRING,
//   searchPath: ["knex", "public"],
// });

// module.exports = pg;
