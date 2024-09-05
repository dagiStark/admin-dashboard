import mongoose from "mongoose";
import Property from "../mongodb/models/property.js";
import User from "../mongodb/models/user.js";

import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getAllProperties = async (req, res) => {
  const {
    _end,
    _order = "asc",
    _start = 0,
    _sort = "price",
    title_like = "",
    propertyType = "",
  } = req.query;

  const query = {};

  if (propertyType !== "") {
    query.propertyType = propertyType;
  }

  if (title_like) {
    query.title = { $regex: title_like, $options: "i" };
  }

  try {
    const count = await Property.countDocuments(query);

    const sortQuery = {};
    if (_sort && _order) {
      sortQuery[_sort] = _order === "asc" ? 1 : -1;
    }

    const properties = await Property.find(query)
      .limit(parseInt(_end))
      .skip(parseInt(_start))
      .sort(sortQuery);

    res.header("x-total-count", count);
    res.header("Access-Control-Expose-Headers", "x-total-count");

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPropertyDetail = async (req, res) => {
  const { id } = req.params;
  const propertyExists = await Property.findOne({ _id: id }).populate(
    "creator"
  );

  if (!propertyExists)
    return res.status(404).json({ message: "Property doesn't found!" });

  res.status(200).json(propertyExists);
};

export const createProperty = async (req, res) => {
  try {
    const { title, description, propertyType, location, price, photo, email } =
      req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    const user = await User.findOne({ email }).session(session);
    if (!user) throw new Error("User not found");

    // Log the photo data to ensure it's correct

    const photoUrl = await cloudinary.uploader
      .upload(photo)
      .catch((error) => console.log(error));
    console.log("Photo data:", photoUrl.url);

    const newProperty = await Property.create({
      title,
      description,
      propertyType,
      location,
      price,
      photo: photoUrl.url,
      creator: user._id,
    });

    user.allProperties.push(newProperty._id);
    await user.save({ session });
    await session.commitTransaction();
    res.status(200).json({ message: "Property created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Cloudinary Upload Error:", error);
  }
};

export const updateProperty = async (req, res) => {};

export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById({ _id: id }).populate("creator");
    if (!property)
      return res.status(404).json({ message: "Property not found" });

    const session = await mongoose.startSession();
    session.startTransaction();

    await property.deleteOne({ session });
    await property.creator.allProperties.pull(property);

    await property.creator.save({ session });
    await session.commitTransaction();

    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
