const express = require("express");
const router = express.Router();
const HouseModel = require("../models/House");

router.get("/", (req, res, next) => {
  HouseModel.find()
    .then((houses) => res.status(200).json(houses))
    .catch((error) => res.status(500).json(error));
});

router.get("/:search", (req, res, next) => {
  HouseModel.find({ fullAddress: req.params.search })
    .then((houses) => {
      res.status(200).json(houses);
    })
    .catch((error) => res.status(500).json(error));
});

router.post("/", (req, res, next) => {
  console.log("hey", req.body);
  HouseModel.create(req.body)
    .then((newHouse) => res.status(200).json(newHouse))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
