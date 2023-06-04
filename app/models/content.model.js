module.exports = (sequelize, Sequelize) => {
  const Content = sequelize.define("contents", {
    contentId: {
      type: Sequelize.INTEGER,
    },
    data: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Content;
};
