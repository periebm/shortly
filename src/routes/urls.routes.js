import { Router } from "express";
import { UrlById, deleteUrl, shortUrl, shorten } from "../controllers/urls.controllers.js";
import validateToken from "../middlewares/validateToken.middleware.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { shortenSchema } from "../schemas/url.schema.js";
import { deleteShortUrl, getUrlId, openUrl, shortenUrl } from "../middlewares/urls.middleware.js";

const urlsRouter = Router();

urlsRouter.get("/urls/:id", getUrlId, UrlById);
urlsRouter.get("/urls/open/:shortUrl", openUrl,shortUrl);

urlsRouter.post("/urls/shorten", validateToken, validateSchema(shortenSchema), shortenUrl, shorten);

urlsRouter.delete("/urls/:id",validateToken, deleteShortUrl, deleteUrl);


export default urlsRouter;