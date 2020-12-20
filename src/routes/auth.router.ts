import express from "express";
import AuthController from "../controllers/auth.controller";
import validator from "../validator";

export default express
  .Router()
  .get("/sign-in", validator.signIn, AuthController.signIn)
  .get("/sign-up", validator.signUp, AuthController.signUp);
