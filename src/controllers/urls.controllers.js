import { db } from "../database/database.config.js";


export async function UrlById(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function shortUrl(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function shorten(req, res) {

    try {

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}


export async function deleteUrl(req, res) {

    try {

        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
}