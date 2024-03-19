import express from "express";
import Monument from "../models/monumentModel.js";
import User from "../models/userModel.js";
import multer from "multer";
import fs, { copyFileSync } from "fs";
import path from "path";
import mongoose from "mongoose";

const router = express.Router();

// route get all
router.get("/", async (request, response) => {
  try {
    const monument = await Monument.find();

    return response.status(200).json(monument);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// route get one
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const monument = await Monument.findById(id);

    return response.status(200).json(monument);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//

export default router;
