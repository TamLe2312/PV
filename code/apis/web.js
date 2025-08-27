import express from "express";
import { dataController } from "../controller/dataController.js";
const Router = express.Router();

Router.get("/", dataController.getDatas);
Router.get("/:id", dataController.getRankById);

export const APIs = Router;
