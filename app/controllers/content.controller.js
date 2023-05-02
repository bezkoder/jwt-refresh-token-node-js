const db = require("../models");
const { content: Content, topic: Topic } = db;

exports.get = (req, res) => {
  if (req.params.id) {
    console.log("id  ..... ");
    Content.findOne({
      where: {
        id: req.params.id,
      },
    }).then((content) => {
      res.send({ message: content });
    });
  } else {
    // findAll
    console.log("topic id  ..... ");
    Content.findAll({
      where: {
        topicId: req.params.topicid,
      },
    }).then((contents) => {
      res.send({ message: contents });
    });
  }
};

exports.create = (req, res) => {
  Content.create({
    type: req.body.type,
    content_html: req.body.content_html,
    content_style: req.body.content_style,
    status: true,
  })
    .then((content) => {
      Topic.findOne({ where: { id: req.body.topicid } })
        .then((topic) => {
          topic.setContents([content]);
          res.send({ data: content });
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
