export default function (sequelize, DataTypes) {
  const Queue = sequelize.define('Queue', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    number: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  }, {
    tableName: 'queue',
  });
  
  return Queue;
}
