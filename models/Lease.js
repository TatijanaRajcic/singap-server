const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaseSchema = new Schema({
  houseId: {
    type: Schema.Types.ObjectId,
    ref: "House",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  discrimination: {
    type: Boolean,
    default: false,
  },
  abuseOnRent: {
    type: Boolean,
    default: false,
  },
  abuseOnDeposit: {
    type: Boolean,
    default: false,
  },
  rating: { type: String, enum: ["good", "bad", "neutral"] },
  leasePicture: {
    type: String,
    required: true,
  },
  description: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const Lease = mongoose.model("Lease", leaseSchema);

module.exports = Lease;
