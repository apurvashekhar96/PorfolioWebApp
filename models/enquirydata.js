const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enquirydataSchema = new Schema({
  name: { type: String },
  emailAdd: { type: String },
  mobile: { type: Number },
  desc: { type: String },
});

module.exports = mongoose.model("Enquirydata", enquirydataSchema);
