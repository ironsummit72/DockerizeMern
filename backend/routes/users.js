import { Router } from "express";
import userModel from "../models/user.model.js";

const router = Router();
/* GET users listing. */
router.get("/", async function (req, res, next) {
  // get all the users here
  const userData = await userModel.find({});
  res.status(200).send(userData);
});
router.get("/:username", async function (req, res, next) {
  const { username } = req.params;
  const userData = await userModel.findOne({ username });
  if (userData) {
    res.status(200).send(userData);
  }else{
    res.status(404).send(userData);

  }
});
/* POST users listing. */
router.post("/", async function (req, res, next) {
  const { username, firstName, lastName } = req.body;
  if (username && firstName && lastName) {
    const dbResponse = await userModel.create({
      username,
      firstName,
      lastName,
    });
    if (dbResponse) {
      res.status(200).send(dbResponse);
    }
  }
});
export default router;
