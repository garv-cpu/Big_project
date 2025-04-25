import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Small Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public")); // for files
app.use(cookieParser());


// Routes


export default app;
