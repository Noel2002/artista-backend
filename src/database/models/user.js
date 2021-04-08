import {hashPassword} from '../../utils/auth';
import {v4 as uuid} from 'uuid';

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    username: DataTypes.STRING,
    bio:DataTypes.STRING,
    dob:DataTypes.STRING,
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg'
    },
    language: { type: DataTypes.STRING, allowNull: false, defaultValue: 'English' },
    address:DataTypes.STRING,
  }, {});

  // User.associate = (models) => {
  //   User.hasMany(models.Blog, {
  //     foreignKey: 'authorId'
  //   });

  // };

  //  hash user password before creating user
  User.beforeCreate(async (user) => {
    if (user.password) { user.password = await hashPassword(user.password); }
    user.id= uuid();
  });
  //  hash user password before updatng user password
  User.beforeBulkUpdate(async ({ attributes: user }) => {
    if (user.password) { user.password = await hashPassword(user.password); }
  });
  return User;
};
