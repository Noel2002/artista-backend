import {hashPassword} from '../../utils/auth';
import {v4 as uuid} from 'uuid';

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Comment', {

    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    sender: DataTypes.STRING,
    body: DataTypes.STRING,
    blogId: {
      type: DataTypes.UUID,      
    },

  }, {});

  Comment.associate = (models) => {
    Comment.belongsTo(models.Blog, {
      foreignKey: 'blogId'
    });

  };

 
 
  return Comment;
};
