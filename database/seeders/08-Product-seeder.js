"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Función para generar un número entero aleatorio entre un rango
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Definición de constantes
    const inviernoId = 1;
    const otonioId = 2;
    const primaveraId = 3;
    const veranoId = 4;
    const bebeId = 1;
    const ninioId = 2;
    const adolecenteId = 3;
    const adultoId = 4;
    const femeninoId = 1;
    const masculinoId = 2;

    // Definir el array con todos los productos
    const products = [
      {
        name: "Abrigo de Lana Infantil",
        description:
          "Abrigo de lana suave y cálido ideal para niños en invierno.",
        model: "LANA2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: ninioId, // niño
        season_id: primaveraId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Chaqueta Casual Adolescente",
        description:
          "Chaqueta casual y moderna para adolescentes, perfecta para el otoño y la primavera.",
        model: "CA2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: adolecenteId, // adolescente
        season_id: otonioId, // otoño
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Pantalón Deportivo Adulto",
        description:
          "Pantalón cómodo para ejercicio o descanso, ideal para adultos.",
        model: "DEPORTIVO2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: adultoId, // adulto
        season_id: primaveraId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Vestido Elegante Infantil",
        description:
          "Vestido elegante para niñas, ideal para eventos especiales.",
        model: "VESTIDO2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: femeninoId, // femenino
        age_id: ninioId, // niña
        season_id: inviernoId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Sudadera con Capucha Juvenil",
        description:
          "Sudadera con capucha, cómoda y versátil para adolescentes, perfecta para días fríos.",
        model: "SUDADERA2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: femeninoId, // femenino
        age_id: adolecenteId, // adolescente
        season_id: inviernoId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Bermuda Casual Hombre",
        description: "Bermuda ligera y cómoda para hombres, ideal para verano.",
        model: "BERMUDA2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: adultoId, // adulto
        season_id: veranoId, // verano
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Chaqueta de Cuero Mujer",
        description:
          "Chaqueta de cuero elegante y moderna, ideal para mujeres.",
        model: "CUERO2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: femeninoId, // femenino
        age_id: adultoId, // adulto
        season_id: inviernoId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Botines de Invierno Hombre",
        description:
          "Botines de invierno resistentes y cómodos, ideales para hombres.",
        model: "BOTINES2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: adultoId, // adulto
        season_id: inviernoId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Camiseta Estampada Adolescente",
        description:
          "Camiseta juvenil con diseño moderno y cómodo, ideal para adolescentes.",
        model: "CAMISETA2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: adolecenteId, // adolescente
        season_id: otonioId, // otoño
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Pantalón Slim Fit Mujer",
        description:
          "Pantalón de corte slim fit, perfecto para un look casual y elegante.",
        model: "SLIMFIT2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: femeninoId, // femenino
        age_id: adultoId, // adulto
        season_id: primaveraId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Camisa de Algodón Niño",
        description: "Camisa de algodón fresca y cómoda, perfecta para niños.",
        model: "CAMISA2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: ninioId, // niño
        season_id: otonioId, // otoño
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Short Deportivo Mujer",
        description:
          "Short cómodo y flexible, ideal para hacer deporte o descansar.",
        model: "SHORTDEPORTIVO2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: femeninoId, // femenino
        age_id: adultoId, // adulto
        season_id: veranoId, // verano
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Campera de Plumas Niño",
        description:
          "Campera de plumas cálida y ligera, perfecta para el invierno de los más pequeños.",
        model: "PLUMAS2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: ninioId, // niño
        season_id: inviernoId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Suéter de Lana Mujer",
        description:
          "Suéter de lana suave y cálido, ideal para mujeres durante el invierno.",
        model: "SUETER2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: femeninoId, // femenino
        age_id: adultoId, // adulto
        season_id: inviernoId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Pantalón Cargo Hombre",
        description:
          "Pantalón cargo cómodo y práctico para hombres, ideal para cualquier ocasión.",
        model: "CARGO2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: adultoId, // adulto
        season_id: otonioId, // otoño
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Falda Larga Mujer",
        description: "Falda larga y fluida, perfecta para el verano.",
        model: "FALDA2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: femeninoId, // femenino
        age_id: adultoId, // adulto
        season_id: veranoId, // verano
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Pantalón Corto Niño",
        description: "Pantalón corto cómodo y fresco para niños en verano.",
        model: "CORTO2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: ninioId, // niño
        season_id: veranoId, // verano
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Chaqueta de Invierno Mujer",
        description:
          "Chaqueta de invierno resistente al frío, ideal para mujeres que aman el frío.",
        model: "CHAQUETA2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: femeninoId, // femenino
        age_id: adultoId, // adulto
        season_id: inviernoId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Sudadera con Estampado Niña",
        description:
          "Sudadera con divertido estampado para niñas, perfecta para invierno.",
        model: "SUDADERA2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: femeninoId, // femenino
        age_id: ninioId, // niña
        season_id: primaveraId, // invierno
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
      },
      {
        name: "Tennis Deportivo Hombre",
        description: "Tennis deportivos cómodos y resistentes para hombres.",
        model: "TENNIS2025",
        price: getRandomInt(80000, 200000),
        stock: getRandomInt(50, 120),
        visibility: 1,
        genre_id: masculinoId, // masculino
        age_id: adultoId, // adulto
        season_id: otonioId, // otoño
        branch_id: getRandomInt(1, 10),
        createdAt: new Date("2024-02-01"),
        updatedAt: new Date("2024-02-01"),
      },
    ];

    // Insertar todos los productos en la base de datos
    await queryInterface.bulkInsert("products", products, {});
  },

  async down(queryInterface, Sequelize) {
    // Eliminar todos los productos en caso de rollback
    await queryInterface.bulkDelete("products", null, {});
  },
};
