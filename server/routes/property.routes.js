import express from "express";

import {
  getAllProperties,
  getPropertyDetail,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/property.controller";

const router = express.Router()

router.get("/", getAllProperties)
router.get("/:id", getPropertyDetail)
router.post("/", createProperty)
router.put("/:id", updateProperty)
router.delete("/:id", deleteProperty)


export default router