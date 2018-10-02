module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('UserConfig', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true  
    },
    user_name: {
      type: DataTypes.STRING(155),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'user_info'
  });
  
  return User;
};