const { authJwt } = require("../middleware");
const controller = require("../controllers/institution.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/institution/:id", [authJwt.verifyToken], controller.get);
  app.get("/api/institution/", [authJwt.verifyToken], controller.get);
  app.post("/api/institution/", [authJwt.verifyToken], controller.create);
};
