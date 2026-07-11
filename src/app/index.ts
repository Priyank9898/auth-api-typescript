import express from "express";
import type { Express } from "express";

export function createApplication(): Express {
  const app = express();

  // Middlewares

  // Routes
  app.get("/", (req, res) => {
    res.json({
      message: "Welcome to auth service",
    });
  });

  return app;
}
