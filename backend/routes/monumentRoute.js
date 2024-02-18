import express from "express";
import { Monument } from "../models/monumentModel.js";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.shortdescription ||
      !request.body.description ||
      !request.body.nation ||
      !request.body.state ||
      !request.body.place
    ) {
      return response.status(400).send({
        message:
          "send all required fields : title , shortdescription , description",
      });
    }
    const newmonument = {
      title: request.body.title,
      shortdescription: request.body.shortdescription,
      description: request.body.description,
      hst_chronology: request.body.hst_chronology,
      ipms_place: request.body.ipms_place,
      archi_ipms: request.body.archi_ipms,
      past_condition: request.body.past_condition,
      present_condition: request.body.present_condition,
      location: request.body.location,
      nation: request.body.nation,
      state: request.body.state,
      place: request.body.place,
      user: request.body.user,
      status: request.body.status,
    };
    const monument = await Monument.create(newmonument);

    return response.status(201).send(monument);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
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
//update
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.shortdescription ||
      !request.body.description ||
      !request.body.nation ||
      !request.body.state ||
      !request.body.place
    ) {
      return response.status(400).send({
        message:
          "send all required fields : title , shortdescription , description",
      });
    }
    const { id } = request.params;
    const result = await Monument.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ mesage: "monument not found " });
    }
    return response
      .status(200)
      .json({ mesage: "monument updated success fully " });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//delete
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Monument.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ mesage: "monument not found " });
    }
    return response
      .status(200)
      .json({ mesage: "monument deleted success fully " });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
