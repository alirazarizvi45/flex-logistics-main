const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Riders = sequelize.define(
  "Riders",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(75),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    },

    password: {
      type: DataTypes.STRING(255),
    },

    phoneNumber: {
      type: DataTypes.STRING(15),
    },
  },
  {
    tableName: "Riders",
    timestamps: false, // Add this line to disable createdAt and updatedAt fields
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

module.exports = Riders;
