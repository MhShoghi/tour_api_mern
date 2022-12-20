import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Import routes

const app = express();
dotenv.config();

app.use(morgan("common"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to tour API");
});

const PORT = process.env.PORT || 6000;

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
