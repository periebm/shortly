import { db } from "../database/database.config.js";

export async function signUp(req, res) {
    const { name, email, password, confirmPassword } = req.body

    try {
        await db.query(`
            INSERT INTO users (name, email, password)
                VALUES($1, $2, $3);`,
            [name, email, res.locals.hash]
        )
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {

    try {
        await db.query(`
            INSERT INTO tokens ("userId", token)
                VALUES($1, $2);
        `, [res.locals.id, res.locals.token]);

        res.status(200).send({token: res.locals.token});
    } catch (err) {
        res.status(500).send(err.message);
    }
}
