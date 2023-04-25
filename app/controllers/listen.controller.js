const db = require("../models");
const { listen: Listen } = db;
exports.get = async (req, res) => {
  if (req.params.id) {
    Listen.findOne({
      where: {
        topicId: req.params.id,
      },
    }).then((listen) => {
      res.send({ message: listen });
    });
  }
};
