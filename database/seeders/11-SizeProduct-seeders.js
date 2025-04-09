"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Definición de constantes

    const size_xs_Id = 1;
    const size_s_Id = 2;
    const size_m_Id = 3;
    const size_l_Id = 4;
    const size_xl_Id = 5;
    const size_xxl_Id = 6;

    // Insertar las relaciones en la tabla pivot SizeProduct
    await queryInterface.bulkInsert(
      "SizeProduct",
      [
        // Producto 1: Abrigo de Lana Infantil (niñoId)
        {
          product_id: 1,
          size_id: size_xs_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 1,
          size_id: size_s_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 1,
          size_id: size_m_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 2: Chaqueta Casual Adolescente (adolecenteId)
        {
          product_id: 2,
          size_id: size_m_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 2,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 2,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 3: Pantalón Deportivo Adulto (adultoId)
        {
          product_id: 3,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 4: Vestido Elegante Infantil (niñoId)
        {
          product_id: 4,
          size_id: size_xs_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          size_id: size_s_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          size_id: size_m_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 5: Sudadera con Capucha Juvenil (adolecenteId)
        {
          product_id: 5,
          size_id: size_m_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 5,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 5,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 6: Bermuda Casual Hombre (adultoId)
        {
          product_id: 6,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 7: Chaqueta de Cuero Mujer (adultoId)
        {
          product_id: 7,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 7,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 7,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 8: Botines de Invierno Hombre (adultoId)
        {
          product_id: 8,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 8,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 8,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 9: Camiseta Estampada Adolescente (adolecenteId)
        {
          product_id: 9,
          size_id: size_m_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 9,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 9,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 10: Pantalón Slim Fit Mujer (adultoId)
        {
          product_id: 10,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 10,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 10,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 11: Camisa de Algodón Niño (niñoId)
        {
          product_id: 11,
          size_id: size_xs_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 11,
          size_id: size_s_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 11,
          size_id: size_m_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 12: Short Deportivo Mujer (adultoId)
        {
          product_id: 12,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 12,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 12,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 13: Campera de Plumas Niño (niñoId)
        {
          product_id: 13,
          size_id: size_xs_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 13,
          size_id: size_s_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 13,
          size_id: size_m_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 14: Suéter de Lana Mujer (adultoId)
        {
          product_id: 14,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 14,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 14,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 15: Pantalón Cargo Hombre (adultoId)
        {
          product_id: 15,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 15,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 15,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 16: Falda Larga Mujer (adultoId)
        {
          product_id: 16,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 16,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 16,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 17: Pantalón Corto Niño (niñoId)
        {
          product_id: 17,
          size_id: size_xs_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 17,
          size_id: size_s_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 17,
          size_id: size_m_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 18: Chaqueta de Invierno Mujer (adultoId)
        {
          product_id: 18,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 18,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 18,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 19: Sudadera con Estampado Niña (niñoId)
        {
          product_id: 19,
          size_id: size_xs_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 19,
          size_id: size_s_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 19,
          size_id: size_m_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Producto 20: Tennis Deportivo Hombre (adultoId)
        {
          product_id: 20,
          size_id: size_l_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 20,
          size_id: size_xl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 20,
          size_id: size_xxl_Id,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Eliminar todas las relaciones de la tabla pivot SizeProduct en caso de rollback
    await queryInterface.bulkDelete("SizeProduct", null, {});
  }
};
