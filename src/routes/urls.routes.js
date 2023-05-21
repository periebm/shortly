import { Router } from "express";
import { UrlById, deleteUrl, shortUrl, shorten } from "../controllers/urls.controllers.js";

const urlsRouter = Router();

urlsRouter.get("/urls/:id", UrlById);
urlsRouter.get("/urls/open/:shortUrl", shortUrl);

urlsRouter.post("/urls/shorten", shorten);

urlsRouter.delete("/urls/:id", deleteUrl);


export default urlsRouter;