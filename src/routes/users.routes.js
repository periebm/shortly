import { Router } from "express";
import { getUser } from "../controllers/users.controllers.js";
import validateToken from "../middlewares/validateToken.middleware.js";

const usersRouter = Router();

usersRouter.get("/users/me", validateToken ,getUser);

export default usersRouter;