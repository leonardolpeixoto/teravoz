export default function(sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true  
    },
    
    name: {
      type: DataTypes.STRING(155),
      allowNull: false,
    },
    
    number_contract: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    }

  }, {
    tableName: 'customer'
  });
  
  Customer.associate = function associate() {
    this.hasMany(sequelize.model('Contact'), { 
      foreignKey: 'customer_id', 
      sourceKey: 'id', 
      onDelete: 'NO ACTION', 
      onUpdate: 'NO ACTION'
    });
  }
  
  return Customer;
};