module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },
    remember_token: {
      type: Sequelize.STRING,
    },
    last_login: {
      type: Sequelize.DATE,
    },
    profile_pic: {
      type: Sequelize.STRING,
    },
    preference_id: {
      type: Sequelize.INTEGER,
    },
    phone: {
      type: Sequelize.STRING,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    pincode: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
