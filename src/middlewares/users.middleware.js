import { db } from "../database/database.config.js";



export async function userFilter(req, res, next) {

    try {
        const info = await db.query(`
        SELECT urls.*, users.name AS username   
            FROM urls
            JOIN users ON urls."userId" = users.id 
            WHERE urls."userId"=$1`,
            [res.locals.session.rows[0].userId])

        let sum = 0;
       info.rows.forEach(u => {
             sum += u.views;
        })

        const result = info.rows.map(u => {
            const urlResponse = {
                id: u.id,
                shortUrl: u.shortUrl,
                url: u.url,
                visitCount : u.views
            }
            return urlResponse;
        }) 


        const userResponse = {
            id: res.locals.session.rows[0].userId,
            name: info.rows[0].username,
            visitCount: sum,
            shortenedUrls: result
        }

        res.locals.userResponse = userResponse;

        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}
