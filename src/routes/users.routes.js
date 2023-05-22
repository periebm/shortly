import { Router } from "express";
import { getUser } from "../controllers/users.controllers.js";
import validateToken from "../middlewares/validateToken.middleware.js";
import { userFilter } from "../middlewares/users.middleware.js";

const usersRouter = Router();

usersRouter.get("/users/me", validateToken, userFilter, getUser);

export default usersRouter;