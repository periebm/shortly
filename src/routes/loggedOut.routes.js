import { Router } from "express";
import { signIn, signUp } from "../controllers/loggedOut.controllers.js";


const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);


export default authRouter;