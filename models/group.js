// const note = require("./note");

module.exports = function (sequelize, DataTypes) {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    }
  });

  Group.associate = models => {
    Group.hasMany(models.User);
  };

  return Group;
};
