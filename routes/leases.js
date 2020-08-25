const express = require("express");
const router = express.Router();
const LeaseModel = require("../models/Lease");
const HouseModel = require("../models/House");
const upload = require("../config/cloudinary");

router.post("/", upload.single("leasePicture"), (req, res, next) => {
  if (req.file) {
    req.body.leasePicture = req.file.path; // Add profileImage key to req.body
  }

  req.body.user = req.session.currentUser._id;

  console.log(req.body.houseId);
  LeaseModel.create(req.body)
    .then((newLease) => {
      HouseModel.findByIdAndUpdate(
        { _id: req.body.houseId },
        { $push: { leases: newLease._id } },
        { new: true }
      )
        .then((updatedHouse) => {
          res.status(200).json(newLease);
        })
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
