
const db = require("../database/models");

const usersApiController = {
  getUsers: async (req, res) => {
    const users = await db.User.findAll({
      include: [
        { model: db.Role, as: "role" },
      ],
    });
    res.json(users);
  },

};

module.exports = usersApiController;
