const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Drivers = sequelize.define(
  "Drivers",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(75),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    },
    lastName: {
      type: DataTypes.STRING(75),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },
    idCardNumber: {
      type: DataTypes.STRING(20),
    },
    phoneNumber: {
      type: DataTypes.STRING(15),
    },
    email: {
      type: DataTypes.STRING(75),
    },
    password: {
      type: DataTypes.STRING(255),
    },
    address: {
      type: DataTypes.STRING(175),
    },
    username: {
      type: DataTypes.STRING(75),
    },
  },
  {
    tableName: "Drivers",
    timestamps: false, // Add this line to disable createdAt and updatedAt fields
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

module.exports = Drivers;
