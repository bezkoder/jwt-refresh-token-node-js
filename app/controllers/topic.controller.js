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
    status: 1,
  })
    .then((topic) => {
      Module.findOne({ where: { id: req.body.module } })
        .then((module) => {
          module.setTopics([topic]);
          res.send({ data: topic });
        })
        .catch((error) => {
          console.log("Error inserting to DB " + error);
          res.status(500).send({ err: error });
        });
    })
    .catch((error) => {
      console.log("Error inserting to DB " + error);
      res.status(500).send({ err: error });
    });
};

exports.getWithModuleId = (req, res) => {
  Module.findOne({ where: { id: req.params.id } })
    .then((module) => {
      module
        .getTopics()
        .then((response) => {
          res.send({ data: response });
        })
        .catch((error) => {
          res.status(500).send({ err: error });
        });
    })
    .catch((error) => {
      console.log("Error inserting to DB " + error);
      res.status(500).send({ err: error });
    });
};
