import express from "express";
import CarController from "../controllers/car.controller";
import validator from "../validator";

export default express.Router()
    .get("/:id", CarController.get)
    .post("/", CarController.create)
    .put("/:id", CarController.update)
    .delete("/:id", CarController.delete)
    .post("/diagnostics/:id", validator.carState, CarController.diagnostics);