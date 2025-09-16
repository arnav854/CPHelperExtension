import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors({
    origin:  "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});