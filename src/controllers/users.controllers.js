import { db } from "../database/database.config.js";


export async function getUser(req, res) {
    try {
        res.status(200).send(res.locals.userResponse);
    } catch (err) {
        res.status(500).send(err.message);
    }
}