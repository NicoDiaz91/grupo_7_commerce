'use strict';
module.exports = (sequelize, DataTypes) => {

  let alias = 'leagues';

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };

  let config = {
    tableName: 'leagues',
    timestamp: false
  };

  const leagues = sequelize.define(alias, cols, config);

  leagues.associate = function (models) {
    leagues.hasMany(models.products, {
      as: 'products',
      foreignKey: 'leagues_id'
    });
  }
  return leagues;
}