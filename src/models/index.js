'use strict';

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.HEROKU_POSTGRESQL_SILVER_URL||process.env.DATABASE_URL;

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

// const foodschema=require('./food');
// const clothesSchema=require('./clothes');
const peoplemodel=require('./people.schema');
const addressmodel=require('./address.schema');

// const foodmodel=foodschema(sequelize,DataTypes);
// const clothesmodel=clothesSchema(sequelize,DataTypes);
const people=peoplemodel(sequelize,DataTypes);
const address=addressmodel(sequelize,DataTypes);

people.hasMany(address,{foreignKey:'peopleId',sourceKey:'id'});
address.belongsTo(people,{foreignKey:'peopleId',targetKey:'id'});

const Collection= require('./lib/collection');


const peopleCollection= new Collection(people);
const addressCollection= new Collection(address);

module.exports={
    db:sequelize,
    peopleCollection:peopleCollection,
    addressCollection:addressCollection
}
