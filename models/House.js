const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  category: [
    {
      type: String,
      enum: ["Condo", "House", "Social Housing"],
    },
  ],
  fullAddress: String,
  blocNumber: String,
  textAddress: String,
  building: String,
  coordinates: {
    type: [Number],
  },
  leases: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lease",
    },
  ],
});

const House = mongoose.model("House", houseSchema);

module.exports = House;
