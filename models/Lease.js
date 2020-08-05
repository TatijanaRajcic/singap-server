const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaseSchema = new Schema({
  house: {
    type: Schema.Types.ObjectId,
    ref: "House",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  rate: Number,
  leasePicture: {
    type: String,
    default:
      "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const Lease = mongoose.model("Lease", leaseSchema);

module.exports = Lease;
