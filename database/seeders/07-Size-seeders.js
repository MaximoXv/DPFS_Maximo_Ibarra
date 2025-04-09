"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sizes",
      [
          { name: "xs" },
          { name: "s" },
          { name: "m" },
          { name: "l" },
          { name: "xl" },
          { name: "xxl" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sizes", null, {});
  },
};
