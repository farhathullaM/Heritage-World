import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import monumentRoute from "./routes/monumentRoute.js";
import galleryRoute from "./routes/galleryRoute.js";
import bcrypt from "bcrypt";
import loginRoute from "./routes/LoginRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("welcome to Historical monuments project ");
});
app.use("/monuments", monumentRoute);
app.use("/gallery", galleryRoute);
app.use("/users", loginRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`app is listerning to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
