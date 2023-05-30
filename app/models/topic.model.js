module.exports = (sequelize, Sequelize) => {
  const Topic = sequelize.define("topics", {
    title: {
      type: Sequelize.STRING,
    },
    subtitle: {
      type: Sequelize.STRING,
    },
    introduction_video_url: {
      type: Sequelize.TEXT,
    },
    introduction_content: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.STRING,
    },
    industry_type: {
      type: Sequelize.STRING,
    },
  });

  return Topic;
};
