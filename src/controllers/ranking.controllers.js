import { db } from "../database/database.config.js";


export async function getRanking(req, res){

    try {

        res.status(200).send({
        })
    } catch (err) {
        res.status(500).send(err.message);
    }
}