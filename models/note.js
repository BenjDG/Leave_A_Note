module.exports = function(sequelize, DataTypes) {
    const Note = sequelize.define("Note", {
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
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
          }
    });

    Note.associate = (models) => {
        Note.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Note;
};