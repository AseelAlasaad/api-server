'use strict';

const people=(sequelize,DataTypes)=>sequelize.define('people',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type: DataTypes.INTEGER,
            allowNull: false

        }
    });

module.exports=people;