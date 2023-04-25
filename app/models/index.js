const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(
  sequelize,
  Sequelize
);
db.institution = require("../models/institution.model.js")(
  sequelize,
  Sequelize
);
db.module = require("../models/module.model.js")(sequelize, Sequelize);
db.topic = require("../models/topic.model.js")(sequelize, Sequelize);

db.listen = require("../models/listen.model.js")(sequelize, Sequelize);
db.read = require("../models/read.model.js")(sequelize, Sequelize);
db.speak = require("../models/speak.model.js")(sequelize, Sequelize);
db.write = require("../models/write.model.js")(sequelize, Sequelize);

// Table Relationships
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.institution.hasMany(db.user, {
  foreignKey: "institutionId",
});
db.user.belongsTo(db.institution);

db.refreshToken.belongsTo(db.user, {
  foreignKey: "userId",
  targetKey: "id",
});
db.user.hasOne(db.refreshToken, {
  foreignKey: "userId",
  targetKey: "id",
});

db.module.belongsToMany(db.topic, {
  through: "modules_topics",
  foreignKey: "moduleId",
  otherKey: "topicId",
});

db.topic.belongsToMany(db.module, {
  through: "modules_topics",
  foreignKey: "topicId",
  otherKey: "moduleId",
});

/**
 * Topic Content Relation
 */
db.listen.belongsTo(db.topic, {
  foreignKey: "topicId",
  targetKey: "id",
});
db.topic.hasOne(db.listen, {
  foreignKey: "topicId",
  targetKey: "id",
});

db.read.belongsTo(db.topic, {
  foreignKey: "topicId",
  targetKey: "id",
});
db.topic.hasOne(db.read, {
  foreignKey: "topicId",
  targetKey: "id",
});

db.speak.belongsTo(db.topic, {
  foreignKey: "topicId",
  targetKey: "id",
});
db.topic.hasOne(db.speak, {
  foreignKey: "topicId",
  targetKey: "id",
});

// Write table Relationship
db.write.belongsTo(db.topic, {
  foreignKey: "topicId",
  targetKey: "id",
});
db.topic.hasOne(db.write, {
  foreignKey: "topicId",
  targetKey: "id",
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
