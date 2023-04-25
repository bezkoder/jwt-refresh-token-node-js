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
      type: Sequelize.INTEGER,
    },
    language: {
      type: Sequelize.INTEGER,
    },
    introduction_content: {
      type: Sequelize.TEXT,
    },
    introduction_style: {
      type: Sequelize.TEXT,
    },
  });

  return Module;
};
