"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "colors",
      [
        { name: "Negro", value: "#181818" },
        { name: "Blanco", value: "#f3f3f3" },
        { name: "Gris", value: "#b8b8b8" },
        { name: "Azul", value: "#4177eb" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colors", null, {});
  },
};
