module.exports = (sequelize, Sequelize) => {
  const Write = sequelize.define("writes", {
    content: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.INTEGER,
    },
  });

  return Write;
};
