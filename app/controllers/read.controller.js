const db = require("../models");
const { read: Read } = db;
exports.get = async (req, res) => {
  if (req.params.id) {
    Read.findOne({
      where: {
        topicId: req.params.id,
      },
    }).then((read) => {
      res.send({ message: read });
    });
  }
};
