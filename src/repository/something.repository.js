import db from "../database/database.connection.js";

async function somethingExists(id) {
    const query = `SELECT * FROM somecollumn WHERE id = $1;`;
    const things = await db.query(query, [id]);
    return things.rows.length > 0;
}

const SomethingRepository = {
    somethingExists
};

export default SomethingRepository;