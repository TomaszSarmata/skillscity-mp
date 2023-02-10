import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_CONNECTION_STRING);

export default sql;

//so now we can import sql to any api file and start using our db without having to repeat the same code hundreds of times
