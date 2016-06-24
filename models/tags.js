"use strict";

module.exports = function( sequelize, DataTypes ) {
  var Tags = sequelize.define( "Tags", {
    name: { type: DataTypes.STRING, primaryKey: true},
    min_tag_id: DataTypes.STRING,
    max_tag_id: DataTypes.STRING,
    latest_timestamp: DataTypes.DATE,
    earliest_timestamp: DataTypes.DATE,
  }, {
    classMethods: {
      associate: function( models ) {
        Tags.belongsToMany(models.Media, {
          through: {
            model: models.MediaTags,
            unique: false
          },
          foreignKey: 'tag_id'
        });
      }
    },
    underscored: true,
    tableName: 'tags',
  });

  return Tags;
};
