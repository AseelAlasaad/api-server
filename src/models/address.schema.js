'use strict';
const address=(sequelize,DataTypes)=>sequelize.define('address',{
        addressname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        peopleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

module.exports=address;