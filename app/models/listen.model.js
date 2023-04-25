module.exports = (sequelize, Sequelize) => {
  const Listen = sequelize.define("listens", {
    content: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.INTEGER,
    },
  });

  return Listen;
};
