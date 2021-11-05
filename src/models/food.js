'use strict';

const newfood=(sequelize,DataTypes)=>sequelize.define('newfood',{
    foodname:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=newfood;