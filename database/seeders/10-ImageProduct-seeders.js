"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) { 

    const data = [];
    for (let i = 1; i < 21; i++) {
        data.push({
           product_id: i,
           image_id: i,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
    }

    await queryInterface.bulkInsert("ImageProduct", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ImageProduct", null, {});
  },
};
