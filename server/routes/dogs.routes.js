import express from "express";

import {
  deleteDog,
  getDog,
  getAllDog,
  postDog,
  updateDog,
} from "../controllers/dogs.controller.js";

const router = express.Router();

router.get("/dogs", getAllDog);
router.get("/dog/:dogId", getDog);
router.post("/dogs", postDog);
router.put("/dogs/:dogId", updateDog);
router.delete("/dogs/:dogId", deleteDog);

export default router;
