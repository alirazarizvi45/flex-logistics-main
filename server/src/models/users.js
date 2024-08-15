const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Users = sequelize.define(
  "Users",
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
    role: {
      type: DataTypes.STRING(75),
    },
    isOnline: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING(255),
    },
    address: {
      type: DataTypes.STRING(175),
    },
    license_image: {
      type: DataTypes.STRING(255),
    },
    profile_pic: {
      type: DataTypes.STRING(255),
    },
    cnic_front: {
      type: DataTypes.STRING(255),
    },
    cnic_back: {
      type: DataTypes.STRING(255),
    },
    vehicle_registration_image: {
      type: DataTypes.STRING(255),
    },
    vehicle_image: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "users",
    timestamps: false, // Add this line to disable createdAt and updatedAt fields
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

module.exports = Users;
