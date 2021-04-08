import {hashPassword} from '../../utils/auth';
import {v4 as uuid} from 'uuid';

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Project', {

    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start: {
      type: DataTypes.STRING,      
    },
    end: {
        type: DataTypes.STRING,      
      },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
    },
  }, {});



 
 
  return Project;
};
