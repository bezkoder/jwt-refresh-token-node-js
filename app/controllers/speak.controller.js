const db = require("../models");
const { speak: Speak } = db;
exports.get = async (req, res) => {
  if (req.params.id) {
    Speak.findOne({
      where: {
        topicId: req.params.id,
      },
    }).then((speak) => {
      res.send({ message: speak });
    });
  }
};
