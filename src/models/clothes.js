'use strict';

const clothes=(sequelize,DataTypes)=>sequelize.define('clothes2',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        foodId:{
            type: DataTypes.INTEGER,
            allowNull: false

        }
    });

module.exports=clothes;