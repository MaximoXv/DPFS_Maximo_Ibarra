"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Lista de fechas (primer día de cada mes - 2024 y 2025)
    const dates = [ "2025-01-01", "2025-02-01", "2025-03-01",
      "2025-04-01", "2025-05-01"
    ].map(date => new Date(date));

    const statuses = ["Realizado", "Pendiente", "Cancelado"];

    // Funciones auxiliares
    const getRandomDate = () => dates[Math.floor(Math.random() * dates.length)];
    const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];
    const getRandomPrice = () => Math.floor(Math.random() * 10000 + 10000); // 10000 - 20000
    const getRandomProductId = () => Math.floor(Math.random() * 20) + 1; // 1 - 20

    // Generar 20 ventas aleatorias
    const sales = Array.from({ length: 400 }, () => {
      const randomDate = getRandomDate();
      return {
        status: getRandomStatus(),
        price: getRandomPrice(),
        product_id: getRandomProductId(),
        createdAt: randomDate,
        updatedAt: randomDate,
      };
    });

    // Insertar los datos
    await queryInterface.bulkInsert("sales", sales, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sales", null, {});
  },
};
