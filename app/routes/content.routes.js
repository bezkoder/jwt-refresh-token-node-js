const controller = require("../controllers/content.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/content/:id", controller.get);
  app.get("/api/content/topic/:topicid", controller.get);
  app.post("/api/content", controller.create);
};
