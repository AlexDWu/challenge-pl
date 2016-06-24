'use strict';

module.exports = function( sequelize, DataTypes ) {
  var Media = sequelize.define( "Media", {
    id: { type: DataTypes.STRING, primaryKey: true},
    low_res_image: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    standard_res_image: DataTypes.STRING,
    link: DataTypes.STRING,
    user_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    time_tagged: DataTypes.DATE,
    type: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function( models ) {
        Media.belongsToMany(models.Tags, {
          through: {
            model: models.MediaTags,
            unique: false,
          },
          foreignKey: 'media_id',
        });
      }
    },
    underscored: true,
    tableName: 'media',
  });

  return Media;
};
