import express from "express";
import passport from "passport";
const googleApiRouter = express.Router();

googleApiRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] }),
);

googleApiRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/kidos",
    failureRedirect: "http://localhost:5173",
  }),
);

export default googleApiRouter;
