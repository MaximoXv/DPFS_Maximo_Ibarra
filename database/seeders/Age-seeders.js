"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ages",
      [
          { name: "Bebe" },
          { name: "Niño" },
          { name: "Adolecente" },
          { name: "Adulto" },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ages", null, {});
  },
};
