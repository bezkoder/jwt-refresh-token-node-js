const controller = require("../controllers/topic.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/topic/:id", controller.get);
  app.get("/api/topic", controller.get);
  app.post("/api/topic", controller.create);

  app.get("/api/module/:id/topic", controller.getWithModuleId);
  /*app.get(
    "/api/test/user", [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod", [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );*/
};
