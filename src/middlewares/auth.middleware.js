import { db } from "../database/database.config.js";
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

export async function validateSignUp(req, res, next) {
    const { name, email, password, confirmPassword } = req.body
    try {
        if (password !== confirmPassword) return res.status(422).send("The passwords don't match.")
        const exist = await db.query(`SELECT * FROM users WHERE email=$1`, [email]);

        if (exist.rowCount !== 0) return res.sendStatus(409);

        const hash = bcrypt.hashSync(password, 10)
        res.locals.hash = hash;
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function validateSignIn(req, res, next) {
    const { email, password } = req.body

    try {
        const user = await db.query(`SELECT * FROM users WHERE email=$1;`, [email]);
        if (user.rowCount === 0) return res.sendStatus(401);

        const isPasswordCorrect = bcrypt.compareSync(password, user.rows[0].password)
        if (!isPasswordCorrect) return res.sendStatus(401)

        const token = uuid();
        res.locals.token = token;
        res.locals.id = user.rows[0].id;
        next();
    }
    catch {
        res.status(500).send(err.message);
    }
}