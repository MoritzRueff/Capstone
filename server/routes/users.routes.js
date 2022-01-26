import express from "express";

import {
  deleteUser,
  getUser,
  registerUser,
  authUser,
  updateUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.post("/user", registerUser);
router.post("/login", authUser);

router.get("/user/:userId", getUser);

router.put("/user/:userId", updateUser);
router.delete("/user/:userId", deleteUser);

export default router;
