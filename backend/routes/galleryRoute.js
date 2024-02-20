import express from "express";
import multer from "multer";
import { Gallery } from "../models/galleryModel.js";
import fs from "fs";

const router = express.Router();

// Set up storage using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    // Append the random number to the original filename
    const modifiedFilename = randomNumber + "-" + file.originalname;
    cb(null, modifiedFilename);
  },
});

const upload = multer({ storage: storage });

// POST route to add a new gallery item
router.post(
  "/:monumentId",
  upload.single("image"),
  async (request, response) => {
    try {
      if (
        !request.body.imgTitle ||
        !request.file ||
        !request.body.description
      ) {
        return response.status(400).send({
          message: "Send all required fields: imgTitle, image, description",
        });
      }

      // Construct the new gallery item object
      const newGalleryItem = {
        monumentId: request.params.monumentId,
        imgTitle: request.body.imgTitle,
        image: request.file.path, // File path of the uploaded image
        description: request.body.description,
      };

      // Create a new gallery item using Mongoose model
      const galleryItem = await Gallery.create(newGalleryItem);

      return response.status(201).json(galleryItem);
    } catch (error) {
      console.error(error.message);
      return response.status(500).send({ message: "Internal Server Error" });
    }
  }
);

// GET route to retrieve  gallery items for monument
router.get("/monument/:monumentId", async (request, response) => {
  try {
    // const id = "65cf253a709063993bd5362b";
    // const galleryItems = await Gallery.find({
    //   monumentId: id,
    // });
    const galleryItems = await Gallery.find({
      monumentId: request.params.monumentId,
    });
    // setTimeout(() => {
    //   console.log(galleryItems);
    // }, 500);
    return response.status(200).json(galleryItems);
  } catch (error) {
    console.error(error.message);
    return response.status(500).send({ message: "Internal Server Error" });
  }
});

// GET route to retrieve a specific gallery item by ID
router.get("/:id", async (request, response) => {
  try {
    const galleryItem = await Gallery.findById(request.params.id);
    if (!galleryItem) {
      return response.status(404).send({ message: "Gallery item not found" });
    }
    return response.status(200).json(galleryItem);
  } catch (error) {
    console.error(error.message);
    return response.status(500).send({ message: "Internal Server Error" });
  }
});

// PUT route to update a specific gallery item by ID
router.put("/:id", upload.single("image"), async (request, response) => {
  try {
    //   const {imgTitle, description } = request.body;

    // Find the gallery item by ID
    let galleryItem = await Gallery.findById(request.params.id);

    // If no gallery item found, return 404 Not Found
    if (!galleryItem) {
      return response.status(404).json({ message: "Gallery item not found" });
    }

    // Check if a new image or video is uploaded
    if (request.file) {
      // Delete previous image or video if exists
      if (galleryItem.image) {
        fs.unlinkSync(galleryItem.image); // Delete previous image or video file
      }
      galleryItem.image = request.file.path; // Update image or video path with new file
    }

    // Update other fields if provided
    if (request.body.imgTitle) {
      galleryItem.imgTitle = request.body.imgTitle;
    }
    if (request.body.description) {
      galleryItem.description = request.body.description;
    }
    //   if (image) {
    //     galleryItem.image = image;
    //   }
    // Save the updated gallery item
    galleryItem = await galleryItem.save();

    return response.status(200).json(galleryItem);
  } catch (error) {
    console.error(error.message);
    return response.status(500).send({ message: "Internal Server Error" });
  }
});

// DELETE route to delete a specific gallery item by ID
router.delete("/:id", async (request, response) => {
  try {
    const galleryItem = await Gallery.findByIdAndDelete(request.params.id);
    if (!galleryItem) {
      return response.status(404).send({ message: "Gallery item not found" });
    }
    return response
      .status(200)
      .send({ message: "Gallery item deleted successfully" });
  } catch (error) {
    console.error(error.message);
    return response.status(500).send({ message: "Internal Server Error" });
  }
});

export default router;
