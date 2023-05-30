const db = require("../models");
const { module: Module, topic: Topic } = db;
exports.get = (req, res) => {
  if (req.params.id) {
    Module.findOne({
      where: {
        id: req.params.id,
      },
    }).then((module) => {
      module.getTopics().then((list) => {
        res.send({ message: module, topics: list });
      });
    });
  } else {
    Module.findAll({
      include: Topic,
    }).then((modules) => {
      res.send({ message: modules });
    });
  }
};

exports.create = (req, res) => {
  Module.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    status: 1,
    industry_type: req.body.industry_type,
    key_outcomes: req.body.key_outcomes,
    language: 1,
    introduction_content: JSON.stringify(req.body.introduction_content),
    introduction_video_url: req.body.introduction_video_url,
  })
    .then((module) => {
      res.send({ data: module });
    })
    .catch((error) => {
      console.log("Error inserting to DB " + error);
      res.status(500).send({ err: error });
    });
};
