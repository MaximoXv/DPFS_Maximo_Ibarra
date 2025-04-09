"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "branches",
      [
        { name: "Nike" },
        { name: "Adidas" },
        { name: "Puma" },
        { name: "Reebok" },
        { name: "Under Armour" },
        { name: "Levi's" },
        { name: "Zara" },
        { name: "H&M" },
        { name: "Gucci" },
        { name: "Prada" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("branches", null, {});
  },
};
