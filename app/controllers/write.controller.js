const db = require("../models");
const { write: Write } = db;
exports.get = async (req, res) => {
  if (req.params.id) {
    Write.findOne({
      where: {
        topicId: req.params.id,
      },
    }).then((write) => {
      res.send({ message: write });
    });
  }
};
