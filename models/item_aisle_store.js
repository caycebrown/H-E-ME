/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('itemAisleStore', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		itemId: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'item',
				key: 'id'
			},
			field: 'item_id'
		},
		aisleId: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'aisle',
				key: 'id'
			},
			field: 'aisle_id'
		},
		storeId: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'store',
				key: 'id'
			},
			field: 'store_id'
		}
	}, {
		tableName: 'item_aisle_store'
	});
};
