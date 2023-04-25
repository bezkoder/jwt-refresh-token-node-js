const db = require("../models");
const { user: User, institution: Institution } = db;

exports.get = (req, res) => {
  if (req.params.id) {
    User.findOne({
      where: {
        id: req.params.id,
      },
    }).then((user) => {
      res.send({ message: user });
    });
  } else {
    // findAll
    User.findAll({
      include: Institution,
    }).then((users) => {
      res.send({ message: users });
    });
  }
};

exports.create = (req, res) => {
  User.create({
    name: req.body.name,
    profile_pic: "",
    preference_id: 1,
    institutionId: req.body.institution,
    phone: req.body.phone,
    isActive: 1,
    email: req.body.email,
  })
    .then((user) => {
      res.send({ data: user });
    })
    .catch((error) => {
      console.log("Error inserting to DB " + error);
      res.status(500).send({ err: error });
    });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
