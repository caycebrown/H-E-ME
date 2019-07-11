/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('store', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'name'
		},
		address: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'address'
		}
	}, {
		tableName: 'store'
	});
};
