const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const RiderTripDetails = sequelize.define(
  "RiderTripDetails",
  {
    tripId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    riderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    travelType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    pickupLocation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    dropOffLocation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    locationDuration: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    locationDistance: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    timeToPick: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    riderFirstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    riderLastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    riderPhoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    riderEmail: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    riderPic: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "ridertripdetails",
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);
module.exports = RiderTripDetails;
