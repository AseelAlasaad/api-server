'use strict';

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' :process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions=process.env.NODE_ENV==='production'? {
    dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}:{};

let sequelize=new Sequelize(POSTGRES_URI,sequelizeOptions);

const food=require('./food');
const clothes=require('./clothes');


const foodmodel=food(sequelize,DataTypes);
const clothesmodel=clothes(sequelize,DataTypes);


foodmodel.hasMany(clothesmodel,{foreignKey:'foodId',sourceKey:'id'});
clothesmodel.belongsTo(foodmodel,{foreignKey:'foodId',targetKey:'id'});

const Collection= require('./lib/collection');

const clothesCollection= new Collection(clothesmodel);
const foodCollection= new Collection(foodmodel);

module.exports={
    db:sequelize,
    clothesCollection:clothesCollection,
    foodCollection:foodCollection
}
