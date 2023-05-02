const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/users", [authJwt.verifyToken], controller.get);
  app.get("/api/users/:id", [authJwt.verifyToken], controller.get);
  app.post("/api/users", [authJwt.verifyToken], controller.create);
  app.put("/api/users/:id", [authJwt.verifyToken], controller.update);

  /*app.get("/api/test/all", [authJwt.verifyToken], controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );*/
};
