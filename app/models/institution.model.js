module.exports = (sequelize, Sequelize) => {
  const Institution = sequelize.define("institutions", {
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.TEXT,
    },
    pincode: {
      type: Sequelize.STRING,
    },
    contact_phone: {
      type: Sequelize.STRING,
    },
    contact_email: {
      type: Sequelize.STRING,
    },
    permissions_list: {
      type: Sequelize.TEXT,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Institution;
};
