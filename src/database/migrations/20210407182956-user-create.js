'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('Users', { 
       id: {
         type:Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4,
         allowNull: false,
         primaryKey:true,
        },
       first_name: {
         type:Sequelize.STRING,
         allowNull:false,
        },
       last_name: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       username: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       email: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       bio: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       dob: {
        type:Sequelize.DATE,
        allowNull:false,
       },
       password: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       address: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       language: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       profile_picture: {
        type:Sequelize.STRING,
        allowNull:false,
        defaultValue: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
       },
       createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
       },
       updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
       },

      });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Users');

  }
};
