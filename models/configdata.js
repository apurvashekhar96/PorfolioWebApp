const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const congifdataSchema = new Schema({
  configLinks: {
    profilePic: { type: String },
    headerPic: { type: String },
    linkdin: { type: String },
    github: { type: String },
    fullName: { type: String },
  },
  sections: [
    {
      label: { type: String },
      link: { type: String },
      header: { type: String },
      content: { type: String },
    },
  ],
  projects: [
    {
      label: { type: String },
      repoLink: { type: String },
      desc: { type: String },
      skills: { type: String },
    },
  ],
});

module.exports = mongoose.model("configdata", congifdataSchema);
