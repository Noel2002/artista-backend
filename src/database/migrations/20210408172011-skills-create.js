'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('Skills', { 
       id: {
         type:Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4,
         allowNull: false,
         primaryKey:true,
        },
      
       title: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       description: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       capacity: {
        type:Sequelize.INTEGER,
        allowNull:false,
       },
       icon: {
        type:Sequelize.STRING,
        allowNull:false,
        defaltValue: 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
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

    await queryInterface.dropTable('Skills');

  }
};

