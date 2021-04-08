'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('Comments', { 
       id: {
         type:Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4,
         allowNull: false,
         primaryKey:true,
        },
       blogId: {
         type:Sequelize.UUID,
         allowNull:false,
         references: {
            model: 'Blogs',
            key: 'id',
            ondelete: 'cascade',
            onupdate: 'cascade'
          }
        },
       sender: {
        type:Sequelize.STRING,
        allowNull:false,
       },
       body: {
        type:Sequelize.STRING,
        allowNull:false,
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

    await queryInterface.dropTable('Comments');

  }
};

