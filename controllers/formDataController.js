const Enquirydata = require("../models/enquirydata");

exports.postFormData = (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const emailAdd = req.body.emailAdd;
  const mobile = req.body.mobile;
  const desc = req.body.desc;

  const item = new Enquirydata({
    name: name,
    emailAdd: emailAdd,
    mobile: mobile,
    desc: desc,
  });

  console.log(item);
  item
    .save()
    .then((result) => {
      console.log("succesfully saved data!");

      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//1joN_YCV5olTRLzsF0I4ry_lToV6wcGVm
//https://drive.google.com/uc?export=download&id=1joN_YCV5olTRLzsF0I4ry_lToV6wcGVm

// res.setHeader("Access-Control-Allow-Origin", "*");
//res.setHeader("Access-Control-Allow-Headers", "Content-Type");
