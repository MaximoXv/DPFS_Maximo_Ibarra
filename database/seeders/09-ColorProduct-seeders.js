"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const colors = [1, 2, 3, 4];

    const data = [];

    for (let i = 1; i < 21; i++) {
      for (let color_id of colors) {
        data.push({
           product_id: i,
           color_id: color_id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    await queryInterface.bulkInsert("ColorProduct", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ColorProduct", null, {});
  },
};
