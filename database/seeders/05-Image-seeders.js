"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "images",
      [
        { url: "imagen1.webp" },
        { url: "imagen2.webp" },
        { url: "imagen3.webp" },
        { url: "imagen4.webp" },
        { url: "imagen5.webp" },
        { url: "imagen6.webp" },
        { url: "imagen7.webp" },
        { url: "imagen8.webp" },
        { url: "imagen9.webp" },
        { url: "imagen10.webp" },
        { url: "imagen11.webp" },
        { url: "imagen12.webp" },
        { url: "imagen13.webp" },
        { url: "imagen14.webp" },
        { url: "imagen15.webp" },
        { url: "imagen16.webp" },
        { url: "imagen17.webp" },
        { url: "imagen18.webp" },
        { url: "imagen19.webp" },
        { url: "imagen20.webp" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};
