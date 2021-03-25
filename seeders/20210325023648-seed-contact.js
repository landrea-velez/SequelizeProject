"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstname: "Laura",
        lastname: "Velez",
        phone: "5552222",
        email: "contact@example.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
      {
        firstname: "Erik",
        lastname: "Jimenez",
        phone: "000221",
        email: "example@example.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
