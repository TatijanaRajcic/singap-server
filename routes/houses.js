const express = require("express");
const router = express.Router();
const HouseModel = require("../models/House");

router.get("/", (req, res, next) => {
  HouseModel.find()
    .then((houses) => res.status(200).json(houses))
    .catch((error) => res.status(500).json(error));
});

router.get("/:search", (req, res, next) => {
  HouseModel.find({ address: req.params.search })
    .then((houses) => {
      res.status(200).json(houses);
    })
    .catch((error) => res.status(500).json(error));
});

router.post("/", (req, res, next) => {
  const { category, address } = req.body;
  const location = {};
  location.coordinates = req.body.coordinates;
  HouseModel.create({ category, address, location })
    .then((newHouse) => res.status(200).json(newHouse))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
