const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  category: [
    {
      type: String,
      enum: ["Condo", "House", "Social Housing"],
    },
  ],
  address: String,
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
    },
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
