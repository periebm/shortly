import { db } from "../database/database.config.js";


export async function getRanking(req, res){

    try {
        const rank = await db.query(`
        SELECT COUNT(*) AS "linksCount", urls."userId" as id, users.name AS name, SUM(urls.views) AS "visitCount"
        FROM urls 
        LEFT JOIN users ON users.id = urls."userId"
        GROUP BY urls."userId", users.name
        ORDER BY "visitCount" DESC
        LIMIT 10;
`)
        res.status(200).send(rank.rows)
    } catch (err) {
        res.status(500).send(err.message);
    }
}