const controller = require("../controllers/module.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/module/:id", controller.get);
  app.get("/api/module", controller.get);
  app.post("/api/module", controller.create);

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
