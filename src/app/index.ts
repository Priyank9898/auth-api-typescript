import express from "express";
import type { Express } from "express";
import { authRouter } from "./auth/routes";

export function createApplication(): Express {
  const app = express();

  //* Middlewares
  app.use(express.json());

  //* Mounting the auth router
  app.use("/auth", authRouter);

  //* Routes
  app.get("/", (req, res) => {
    res.json({
      message: "Welcome to auth service",
    });
  });

  return app;
}
