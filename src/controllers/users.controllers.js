import { db } from "../database/database.config.js";


export async function getUser(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message);
    }
}