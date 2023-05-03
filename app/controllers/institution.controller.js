const db = require("../models");
const { institution: Institution } = db;
exports.get = (req, res) => {
  console.log("Institution GET function called");
  if (req.params.id) {
    Institution.findOne({
      where: {
        id: req.params.id,
      },
    }).then((institution) => {
      res.send({ message: institution });
    });
  } else {
    // findAll
    Institution.findAll({
      where: {
        type: 2,
      },
    }).then((institutions) => {
      res.send({ message: institutions });
    });
  }
};

exports.create = (req, res) => {
  console.log("Institution create function called", req.body.name);
  Institution.create({
    name: req.body.name,
    address: req.body.address,
    pincode: req.body.pincode,
    contact_phone: req.body.phone,
    contact_email: req.body.email,
    permissions_list: "",
    city: req.body.city,
    state: req.body.state,
    isActive: true,
    type: 2,
  })
    .then((institution) => {
      res.send({ data: institution });
    })
    .catch((error) => {
      console.log("Error inserting to DB " + error);
      res.status(500).send({ err: error });
    });
};
