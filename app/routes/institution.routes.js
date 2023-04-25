const controller = require("../controllers/institution.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/institution/:id", controller.get);
  app.get("/api/institution/", controller.get);
  app.post("/api/institution/", controller.create);
};
