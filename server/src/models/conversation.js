const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Converstation = sequelize.define(
  "Converstation",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tripId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    receiverId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    role: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePic: {
      type: DataTypes.STRING(255),
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    tableName: "conversation",
    timestamps: true, // Add this line to disable createdAt and updatedAt fields
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

module.exports = Converstation;
