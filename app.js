import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { connect } from "./utils/dbConnect.js";
import apiRouter from "./routes/index.js";
import "./passport.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(
  session({
    secret: "sample secret",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

connect();

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
