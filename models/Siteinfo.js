const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Siteinfo = sequelize.define('Siteinfo', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Siteinfo;
