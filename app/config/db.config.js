module.exports = {
  HOST: "3.128.94.56",
  USER: "bn_myapp",
  PASSWORD: "",
  DB: "bitnami_myapp",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
