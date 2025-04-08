"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "seasons",
      [
          { name: "Invierno" },
          { name: "Otoño" },
          { name: "Primavera" },
          { name: "Verano" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("seasons", null, {});
  },
};
