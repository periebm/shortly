import { db } from "../database/database.config.js";

export async function signUp(req, res) {

    try {

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {

    try {

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
