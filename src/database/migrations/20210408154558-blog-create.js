'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('Blogs', { 
       id: {
         type:Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4,
         allowNull: false,
         primaryKey:true,
        },
       authorId: {
         type:Sequelize.UUID,
         allowNull:false,
         references: {
          model: 'Users',
          key: 'id',
          ondelete: 'cascade',
          onupdate: 'cascade'
        }
        },
       title: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       description: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       cover_image: {
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

    await queryInterface.dropTable('Blogs');

  }
};

