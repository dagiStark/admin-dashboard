import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log(`server listening on port ${PORT}....`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
