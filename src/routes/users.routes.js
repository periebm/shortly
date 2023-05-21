import { Router } from "express";
import { getUser } from "../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.get("/users/me", getUser);

export default usersRouter;