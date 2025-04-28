"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullname: "Eugenia Ward",
          direction: "Quibusdam elit labo",
          phonenumber: 1111111111,
          email: "test@gmail.com",
          password:
            "$2b$08$NVmr3tgPSCQ0MLJR9D1YFOy8Bi6OGpvvqVvTHS2Y0b/nWyepUqkZm", //12345678
          avatar: "userDefault.jpg",
          role_id: 3, //admin
        },
        {
          fullname: "Hermione Sandoval",
          direction: "Consequatur rerum q",
          phonenumber: 2147483647,
          email: "test2@gmail.com",
          password:
            "$2b$08$fBdqpuOBTgCzZiDWr6fXx.ChodH1ZHggkfV6YJ26UWHHmXZHnY8SC", //12345678
          avatar: "userDefault.jpg",
          role_id: 1, //seller
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
