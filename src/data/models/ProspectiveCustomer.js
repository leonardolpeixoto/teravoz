export default function (sequelize, DataTypes) {
  const ProspectiveCustomer = sequelize.define('ProspectiveCustomer', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    number: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  }, {
    tableName: 'prospective_customer',
  });

  return ProspectiveCustomer;
}
