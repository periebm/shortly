import { Router } from "express";
import authRouter from "./loggedOut.routes.js";
import urlsRouter from "./urls.routes.js";
import usersRouter from "./users.routes.js";
import urlsRouter from "./loggedOut.routes.js";
import rankingRouter from "./ranking.routes.js";


const router = Router();

router.use(authRouter);
router.use(urlsRouter);
router.use(usersRouter);
router.use(rankingRouter);

export default router;