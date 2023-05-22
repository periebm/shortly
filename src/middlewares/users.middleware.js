
export async function userFilter(req, res, next){

    try {
        user = await db.query(`
        SELECT * 
        FROM urls 
        WHERE id=$1`, [res.locals.session.rows[0].userId])
        console.log(user.rows[0])
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}