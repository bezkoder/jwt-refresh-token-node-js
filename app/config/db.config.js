module.exports = {
  HOST: "3.143.203.156",
  USER: "bn_myapp",
  PASSWORD: "",
  DB: "bitnami_myapp",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
