const db = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { user: User, institution: Institution, role: Role } = db;

exports.get = (req, res) => {
  if (req.params.id) {
    User.findOne({
      include: Role,
      where: {
        id: req.params.id,
      },
    }).then((user) => {
      res.send({ message: user });
    });
  } else {
    // findAll
    var roles = ["SuperAdmin", "Sales", "ContentCreator"];
    if (req.role.includes("ROLE_SUPERADMIN")) {
      roles = [];
    }
    User.findAll({
      include: [
        Institution,
        {
          model: Role,
          where: {
            name: { [Op.notIn]: roles },
          },
        },
      ],
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
    industry_type: req.body.industry_type,
    phone: req.body.phone,
    isActive: 1,
    email: req.body.email,
    password: bcrypt.hashSync("demo", 8),
  })
    .then((user) => {
      Role.findOne({
        where: {
          id: req.body.role,
        },
      }).then((role) => {
        user.setRoles(role).then(() => {
          res.send({ data: user });
        });
      });
    })
    .catch((error) => {
      console.log("Error inserting to DB " + error);
      res.status(500).send({ err: error });
    });
};

exports.update = (req, res) => {
  User.update(
    {
      name: req.body.name,
      profile_pic: "",
      preference_id: 1,
      institutionId: req.body.institution,
      phone: req.body.phone,
      isActive: 1,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((user) => {
      res.send({ data: user });
    })
    .catch((error) => {
      console.log("Error updating to DB " + error);
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
