module.exports = (sequelize, Sequelize) => {
  const Read = sequelize.define("reads", {
    content: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.INTEGER,
    },
  });

  return Read;
};
