export default function (sequelize, DataTypes) {
  const Contact = sequelize.define('Contact', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'id',
      },
    },
    number: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  }, {
    tableName: 'contact',
  });

  Contact.associate = function associate() {
    this.belongsTo(sequelize.model('Customer'), {
      foreignKey: 'customer_id',
      targerKey: 'id',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };

  return Contact;
}
