module.exports = (sequelize, Sequelize) => {
  const Topic = sequelize.define("topics", {
    title: {
      type: Sequelize.STRING,
    },
    subtitle: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.INTEGER,
    },
  });

  return Topic;
};
