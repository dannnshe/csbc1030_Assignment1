const faker = require('faker');

module.exports = {
  // Function to populate the database with sample data
  up: async (queryInterface, Sequelize) => {
    try {
      // Array of user data (replace with your actual data array)
      const users = [...]; 

      // Insert each user into the database and log the operation
      for (const user of users) {
        await queryInterface.bulkInsert('Users', [user]);
        console.log(`User inserted: ${user.username}`);
      }

      console.log('Seeding completed successfully');
    } catch (error) {
      console.error('Error during seeding:', error);
    }
  },

  // Function to revert the changes made by the 'up' function
  down: async (queryInterface, Sequelize) => {
    // Code to revert the database to its previous state
  },
};
