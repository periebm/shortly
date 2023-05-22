import { db } from "../database/database.config.js";


export async function UrlById(req, res) {
    try {
        res.status(200).send({
            id: res.locals.url.rows[0].id,
            shortUrl: res.locals.url.rows[0].shortUrl,
            url: res.locals.url.rows[0].url
        })
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function shortUrl(req, res) {
    try {
        res.redirect(res.locals.url.rows[0].url);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function shorten(req, res) {
    const { url } = req.body;

    try {
        await db.query(`
        INSERT INTO urls (url, "shortUrl", "userId")
            VALUES($1, $2, $3);`,
            [url, res.locals.new_url, res.locals.session.rows[0].userId]
        )

        const shortLink = await db.query(
            `SELECT * FROM urls WHERE "shortUrl" = $1; `, [res.locals.new_url]
        )

        res.status(201).send({id: shortLink.rows[0].id, shortUrl: res.locals.new_url});
    } catch (err) {
        res.status(500).send(err.message);
    }
}


export async function deleteUrl(req, res) {
    const { id } = req.params;

    try {
        await db.query(`DELETE FROM urls WHERE id=$1`, [id])
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
}