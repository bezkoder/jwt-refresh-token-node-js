const db = require("../models");
const { topic: Topic, module: Module } = db;
exports.get = async (req, res) => {
  if (req.params.id) {
    Topic.findOne({
      where: {
        id: req.params.id,
      },
    }).then((topic) => {
      res.send({ message: topic });
    });
  } else {
    Topic.findAll().then((topics) => {
      res.send({ message: topics });
    });
  }
};

exports.create = (req, res) => {
  Topic.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    introduction_content: JSON.stringify(req.body.introduction_content),
    introduction_video_url: req.body.introduction_video_url,
    moduleId: req.body.module,
    type: req.body.type,
    industry_type: req.body.industry_type,
    status: 1,
  })
    .then((topic) => {
      res.send({ data: topic });
    })
    .catch((error) => {
      console.log("Error inserting to DB " + error);
      res.status(500).send({ err: error });
    });
};

exports.getWithModuleId = (req, res) => {
  Topic.findAll({
    where: {
      moduleId: req.params.id,
    },
  })
    .then((topics) => {
      res.send({ message: topics });
    })
    .catch((error) => {
      console.log("Error fetching Topics from DB " + error);
      res.status(500).send({ err: error });
    });
};
