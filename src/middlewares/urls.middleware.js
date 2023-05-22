import { nanoid } from "nanoid";
import { db } from "../database/database.config.js";

export async function shortenUrl(req, res, next) {
    try {
        const new_url = nanoid(10);
        res.locals.new_url = new_url;
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getUrlId(req, res, next) {
    const { id } = req.params;
    try {
        const url = await db.query(`SELECT * FROM urls WHERE id=$1`, [id])
        if (url.rowCount === 0) return res.sendStatus(404);

        res.locals.url = url;
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function openUrl(req, res, next) {
    const { shortUrl } = req.params;

    try {
        const url = await db.query(`SELECT * FROM urls WHERE "shortUrl"=$1`, [shortUrl])
        if (url.rowCount === 0) return res.sendStatus(404);

        await db.query(`
            UPDATE urls
                SET views=$1 WHERE "shortUrl"=$2;
        `, [++url.rows[0].views, shortUrl]);
        console.log(url.rows[0].views);
        res.locals.url = url;
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function deleteShortUrl(req, res, next) {
    const { id } = req.params;

    try {
        const url = await db.query(`SELECT * FROM urls WHERE id=$1`, [id])
        if (url.rowCount === 0) return res.sendStatus(404);
        
        if (url.rows[0].userId !== res.locals.session.rows[0].userId) return res.sendStatus(401); 

        next();
    } catch (err) {
        res.status(500).send(err.message);
    }

}