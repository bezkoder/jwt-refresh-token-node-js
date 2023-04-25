module.exports = (sequelize, Sequelize) => {
  const Speak = sequelize.define("speaks", {
    content: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.INTEGER,
    },
  });

  return Speak;
};
