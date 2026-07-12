import express from "express";
import AuthenticationController from "./controller";
export const authRouter = express.Router();

const controller = new AuthenticationController();

authRouter.post("/sign-up", controller.handleSignup.bind(controller));
