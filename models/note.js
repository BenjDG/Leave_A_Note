module.exports = function (sequelize, DataTypes) {
  const Note = sequelize.define('Note', {
    // Title cannot be empty, must be at least 1 char long
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Note.associate = models => {
    Note.belongsTo(models.User, {
      foreignKey: {
        name: models.User.id,
        allowNull: false
      }
    });
  };

  return Note;
};
