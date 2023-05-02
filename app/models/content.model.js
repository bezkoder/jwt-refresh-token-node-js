module.exports = (sequelize, Sequelize) => {
  const Content = sequelize.define("contents", {
    type: {
      type: Sequelize.STRING,
    },
    content_html: {
      type: Sequelize.TEXT,
    },
    voiceover: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Content;
};
