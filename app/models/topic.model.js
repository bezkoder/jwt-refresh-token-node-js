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
  });

  return Topic;
};
