'use strict';
const {Sequelize,DataTypes} = require('sequelize');
const food = require('./food.js');
const clothes = require('./clothes.js');
require('dotenv').config();


const myPOSTGRES_URL = process.env.DATABASE_URL || "postgres://ibrahimalaqoul:123456@localhost:5432/mydatabase" ;
let sequelizeOptions =  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  };

  let sequelize = new Sequelize(myPOSTGRES_URL, {});


  module.exports = {
    databaseexported: sequelize, 
    food: food(sequelize,DataTypes),
    clothes: clothes(sequelize,DataTypes)
}

