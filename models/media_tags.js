'use strict';

module.exports = function( sequelize, DataTypes ) {
  var MediaTags = sequelize.define( "MediaTags", {
    media_id: DataTypes.STRING,
    tag_id: DataTypes.STRING,
  }, {
    classMethods: {
    },
    underscored: true,
    tableName: 'media_tags',
  });

  return MediaTags;
};
