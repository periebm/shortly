import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { loginSchema, userSchema } from "../schemas/auth.schema.js";
import { validateSignIn, validateSignUp } from "../middlewares/auth.middleware.js";


const authRouter = Router();

authRouter.post("/signup",validateSchema(userSchema), validateSignUp, signUp);
authRouter.post("/signin",validateSchema(loginSchema), validateSignIn, signIn);


export default authRouter;