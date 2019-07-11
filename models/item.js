/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('item', {
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
		}
	}, {
		tableName: 'item'
	});
};
