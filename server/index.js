import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { ConnectDB } from "./dbConnect.js";
import rootRouter from "./routes/index.js";

dotenv.config("");
const app = express();

app.get("/", (req, res) => {
  res.send("Ok from server");
});

// middlewares
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(cors({ origin: process.env.CORS_URL, credentials: true }));

// Routes
app.use("/api/v1", rootRouter);

const PORT = process.env.PORT || 8001;

ConnectDB();

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
