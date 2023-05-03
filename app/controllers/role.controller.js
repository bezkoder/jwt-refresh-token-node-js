const db = require("../models");
const { Op } = require("sequelize");
const { role: Role } = db;
exports.get = async (req, res) => {
  console.log("Logged in User role   ", req.role);
  if (req.role.includes("ROLE_SUPERADMIN")) {
    Role.findAll().then((role) => {
      res.send({ data: role });
    });
  } else {
    Role.findAll({
      where: {
        name: { [Op.notIn]: ["SuperAdmin", "Sales", "ContentCreator"] },
      },
    }).then((role) => {
      res.send({ data: role });
    });
  }
};
