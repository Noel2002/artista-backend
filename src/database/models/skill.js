import {hashPassword} from '../../utils/auth';
import {v4 as uuid} from 'uuid';

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Skill', {

    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    capacity: {
      type: DataTypes.INTEGER,      
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
    },
  }, {});



 
 
  return Skill;
};
