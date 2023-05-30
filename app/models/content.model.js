module.exports = (sequelize, Sequelize) => {
  const Content = sequelize.define("contents", {
    data: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Content;
};
