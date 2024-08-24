import express from "express";

import {
  getAllUsers,
  createUser,
  getUserInfoById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserInfoById);

export default router;
