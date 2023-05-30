module.exports = (sequelize, Sequelize) => {
  const Module = sequelize.define("modules", {
    title: {
      type: Sequelize.STRING,
    },
    subtitle: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.INTEGER,
    },
    industry_type: {
      type: Sequelize.STRING,
    },
    language: {
      type: Sequelize.INTEGER,
    },
    introduction_video_url: {
      type: Sequelize.TEXT,
    },
    introduction_content: {
      type: Sequelize.TEXT,
    },
    key_outcomes: {
      type: Sequelize.TEXT,
    },
  });

  return Module;
};
