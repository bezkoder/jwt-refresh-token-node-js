const { authJwt } = require("../middleware");
const controller = require("../controllers/topic.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/topic/:id", [authJwt.verifyToken], controller.get);
  app.get("/api/topic", [authJwt.verifyToken], controller.get);
  app.post("/api/topic", [authJwt.verifyToken], controller.create);

  app.get(
    "/api/module/:id/topic",
    [authJwt.verifyToken],
    controller.getWithModuleId
  );
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
