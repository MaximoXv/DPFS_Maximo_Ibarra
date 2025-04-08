"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Clip para bolsa",
          description: "Clip impreso en una sola pieza",
          model: "",
          price: 500,
          stock: 123,
          visibility: 1,
          image: "default.jpg",
          category_id: 1,
          branch_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};