import {hashPassword} from '../../utils/auth';
import {v4 as uuid} from 'uuid';

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {

    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    authorId: {
      type: DataTypes.UUID,      
    },
    cover_image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
    },
  }, {});

  Blog.associate = (models) => {
    Blog.belongsTo(models.User, {
      foreignKey: 'authorId'
    });
    Blog.hasMany(models.Comment, {
      foreignKey: 'blogId'
    })

  };

 
 
  return Blog;
};
