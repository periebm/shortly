import { db } from "../database/database.config.js"

export default async function validateToken(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    if (!token) return res.sendStatus(401)  

    try {
        const session = await db.query(`SELECT * FROM tokens WHERE token=$1;`, [token]);

        if (session.rowCount === 0) return res.status(401).send("Token inválido")
        res.locals.session = session;
        next();
    } catch (err) {
        res.status(500).send(err.message)
    }
}